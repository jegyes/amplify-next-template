import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://apip.cc/json", {next: { revalidate: 60 }});

  if (!res.ok) {
    return NextResponse.json(
      { error: `apip.cc failed with ${res.status}` },
      { status: 502 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
