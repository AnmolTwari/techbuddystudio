import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, phone, serviceNeeded, message, timeline } = body;

    // 1. Basic validation
    if (!name || !email || !businessName) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Please provide your name, business name, and email address." 
        },
        { status: 400 }
      );
    }

    // 2. Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Please provide a valid email address." 
        },
        { status: 400 }
      );
    }

    // 3. Generate reference lead ID
    const leadId = `TBS-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const leadRecord = {
      leadId,
      timestamp,
      name,
      businessName,
      email,
      phone: phone || "Not provided",
      serviceNeeded: serviceNeeded || "New Business Website",
      message: message || "No notes provided",
      timeline: timeline || "Standard sprint",
    };

    // 4. Structured Server Telemetry (Guarantees enquiry is captured in logs)
    console.log("[INCOMING_DISCOVERY_LEAD]", JSON.stringify(leadRecord, null, 2));

    // 5. Optional CRM / Webhook integration (if environment variable configured)
    const webhookUrl = process.env.LEAD_NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚀 New Discovery Lead: **${businessName}** (${name})`,
            embeds: [leadRecord],
          }),
        });
      } catch (webhookErr) {
        console.error("[WEBHOOK_FORWARD_FAILED]", webhookErr);
      }
    }

    // 6. Return structured next steps to client
    return NextResponse.json({
      success: true,
      leadId,
      timestamp,
      message: `Inquiry registered successfully. We will follow up with you at ${email} within 2 business hours.`,
      nextSteps: [
        "A senior web engineer is reviewing your project details.",
        "You will receive an email confirmation with an architectural roadmap and estimated timeline.",
        "We will schedule your 1-on-1 discovery call to finalize technical scope and fixed milestone pricing."
      ],
      directSupportEmail: "techbuddystudio@gmail.com",
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "An internal server error occurred while processing your request. Please email techbuddystudio@gmail.com directly." 
      },
      { status: 500 }
    );
  }
}
