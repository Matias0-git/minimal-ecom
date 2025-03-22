
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type IncidentResponse = {
  incidents: any[];
  count: number;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { latitude, longitude, radius = 5 } = await req.json();
    
    if (!latitude || !longitude) {
      throw new Error("Latitude and longitude are required");
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    console.log("Searching for incidents near:", { latitude, longitude, radius });

    // Query for nearby incidents using PostgreSQL's earth distance calculation
    const { data: incidents, error } = await supabase.rpc('get_nearby_incidents', {
      lat: latitude,
      lng: longitude,
      radius_km: radius
    });

    if (error) {
      throw error;
    }

    console.log(`Found ${incidents?.length || 0} incidents within ${radius}km`);

    // Prepare response
    const response: IncidentResponse = {
      incidents: incidents || [],
      count: incidents?.length || 0
    };

    // Return the response
    return new Response(JSON.stringify(response), {
      headers: { 
        ...corsHeaders,
        'Content-Type': 'application/json' 
      }
    });

  } catch (error) {
    console.error("Error in nearby-incidents function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      { 
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
