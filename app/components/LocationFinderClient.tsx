'use client';

import type { LocationInfo } from "@/app/types/location";
import { useEffect, useState } from "react"
import TempTrackerClient from "./TempTrackerClient";

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState<LocationInfo>({})
    // const [locationInfo, setLocationInfo] = useState({})
    const getLocationInfo = async () => {
        const response = await fetch("https://apip.cc/json");
        const locationData = await response.json();

        setLocationInfo(locationData as LocationInfo);
    };

    useEffect(() => { 
        getLocationInfo();
    });

    const lat = locationInfo.Latitude != null ? Number(locationInfo.Latitude) : undefined;
    const lon = locationInfo.Longitude != null ? Number(locationInfo.Longitude) : undefined;

   const latNum = Number(locationInfo?.Latitude);
   const lonNum = Number(locationInfo?.Longitude);

   const hasCoords = Number.isFinite(latNum) && Number.isFinite(lonNum);
 



    return (
    <>
        <h1>Hello from your Client in {locationInfo?.City}!</h1>
        <h2>
            {hasCoords && <TempTrackerClient lat={latNum} lon={lonNum} />}   
        </h2>
    </>
    );   
}
