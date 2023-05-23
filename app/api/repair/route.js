import RepairRepository from "../../../Repository/RepairRepo";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();

  try {
    const repair = await RepairRepository.createRepair(body);

    return NextResponse.json(repair);
  } catch (error) {
    console.log(error);
    return new Response("Error creating repair");
  }
}

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}
