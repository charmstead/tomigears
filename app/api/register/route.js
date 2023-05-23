import AccountRepository from "../../../Repository/AccountRepo";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectMongo from "../../../lib/connectDB";

export async function POST(request) {
  await connectMongo();

  const body = await request.json();

  const { email, name, firstname, lastname, password } = body;

  try {
    const account = await AccountRepository.register({ email, name, firstname, lastname, password });

    const { salt, hash, ...user } = account.toObject();

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new Response("User with email already exist.", {
      status: 400,
    });
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
