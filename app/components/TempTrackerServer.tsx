type TempTrackerServerProps = {
  lat: number;
  lon: number;
};

export default async function TempTrackerServer({ lat, lon }: TempTrackerServerProps) {

 const url =
    `https://www.7timer.info/bin/astro.php` +
    `?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  const temp2m = data?.dataseries?.[0]?.temp2m ?? null;
  return (
    <div>
      <p>Lat: {lat}; Lon: {lon}, where the current temperature is { temp2m }°C.</p>
    </div>
  );
}
