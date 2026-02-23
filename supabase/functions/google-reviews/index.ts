import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    const placeId = Deno.env.get("GOOGLE_PLACE_ID");

    if (!apiKey || !placeId) {
      throw new Error("Missing Google Places API key or Place ID");
    }

    // Use Places API (New) to get place details with reviews
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount,displayName&key=${apiKey}`;

    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount,displayName",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google API error:", errorText);
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    // Transform reviews to a simpler format
    const reviews = (data.reviews || []).map((review: any) => ({
      name: review.authorAttribution?.displayName || "Anonymous",
      rating: review.rating || 5,
      text: review.text?.text || "",
      date: review.relativePublishTimeDescription || "",
      avatar: (review.authorAttribution?.displayName || "A").charAt(0).toUpperCase(),
      photoUri: review.authorAttribution?.photoUri || null,
    }));

    return new Response(
      JSON.stringify({
        reviews,
        rating: data.rating || 5,
        totalReviews: data.userRatingCount || 0,
        businessName: data.displayName?.text || "Ready 2 Remodel",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
