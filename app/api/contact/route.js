import { NextResponse } from "next/server";
import { sendGoogleEmail } from "lib/helper";

export async function POST(request) {
  const body = await request.json();

  try {
    const message = `
                <div>Email: ${body.email}</div>
                <div>name: ${body.name}</div>
                <div>phone: ${body.phone}</div>
                <div>service: ${body.service}</div>
                <div>budget: ${body.budget}</div>
                <div>industry: ${body.industry}</div>
                <div>message: ${body.message}</div>`;

    await sendGoogleEmail({
      body: message,
      recipient: "tomideso@gmail.com",
      subject: `${body.name} -  Tomigears`,
    });

    return NextResponse.json("Message sent succesfully.");
  } catch (error) {
    console.log(error);
    return new Response("Error sending messaging");
  }
}
