import type { LocationInfo } from "@/app/types/location";
import TempTrackerServer from "./TempTrackerServer";

export default async function LocationFinderServer() {
  const response = await fetch("https://apip.cc/json", { cache: "no-store" });
  const locationInfo = (await response.json()) as LocationInfo;

  const latNum = Number(locationInfo?.Latitude);
  const lonNum = Number(locationInfo?.Longitude);
  const hasCoords = Number.isFinite(latNum) && Number.isFinite(lonNum);

  return (
    <>
      <h1>Hello from your back end in {locationInfo?.City ?? "N/A"}!</h1>
      <h2>
        {/* Lat: {hasCoords ? latNum : "N/A"}; Lon: {hasCoords ? lonNum : "N/A"} */}
        {hasCoords && <TempTrackerServer lat={latNum} lon={lonNum} />}
      </h2>

      {/* Pass 1: prove the tracker renders */}
      
    </>
  );
}
