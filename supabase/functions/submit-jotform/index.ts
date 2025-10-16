import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, duration, message } = await req.json();
    
    const JOTFORM_API_KEY = Deno.env.get('JOTFORM_API_KEY');
    const JOTFORM_FORM_ID = '252883172689068';
    
    if (!JOTFORM_API_KEY) {
      throw new Error('JOTFORM_API_KEY is not configured');
    }

    console.log('Submitting to Jotform:', { name, phone, duration });

    // Submit to Jotform API using URLSearchParams
    const params = new URLSearchParams();
    params.append('apiKey', JOTFORM_API_KEY);
    params.append('submission[3]', name); // Assuming field ID 3 is name
    params.append('submission[4]', phone); // Assuming field ID 4 is phone
    params.append('submission[5]', duration); // Assuming field ID 5 is duration
    if (message) {
      params.append('submission[6]', message); // Assuming field ID 6 is message
    }

    const response = await fetch(
      `https://api.jotform.com/form/${JOTFORM_FORM_ID}/submissions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Jotform API error:', data);
      throw new Error(data.message || 'Failed to submit form');
    }

    console.log('Jotform submission successful:', data);

    return new Response(
      JSON.stringify({ success: true, submissionId: data.submissionID }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in submit-jotform function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
