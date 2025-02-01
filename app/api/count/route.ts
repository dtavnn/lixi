import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  try {
    console.log("NEXT_PUBLIC_API1:", process.env.NEXT_PUBLIC_API);
    const count = await fetch(
      `${process.env.NEXT_PUBLIC_API ?? ""}/count/tuimu`
    ).then((res) => res.json());
    return NextResponse.json({ ...count });
  } catch (error) {
     console.log("NEXT_PUBLIC_API2:", process.env.NEXT_PUBLIC_API);
    console.error("Error", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
