import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lon = Number(searchParams.get("lon"));

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return NextResponse.json({ error: "Invalid lat/lon" }, { status: 400 });
  }

  const url =
    `https://www.7timer.info/bin/astro.php` +
    `?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    return NextResponse.json(
      { error: `7timer failed with ${res.status}` },
      { status: 502 }
    );
  }

  const data = await res.json();
  const temp2m = data?.dataseries?.[0]?.temp2m ?? null;

  return NextResponse.json({ temp2m, lat, lon });
}
