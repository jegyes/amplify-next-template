// THIS COMPONENT WILL RECEIVE LOCATIION COORDINATES FROM 
// <LocationFinderServer> and pass them ("latitude", "longitude") as {lat} and {lon}, to a function that will
// make a call to "7timer.info" and receive weather data in response {} as temperature {temp2m}

// https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0


// export default async function TempTrackerServer() {

//         const response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
//         const temp2m = await response.json();

//         // const temperature =temp2m;
//         console.log({temp2m});


//     return (
//         <>
//           {/* <h1>The temperature is now {temperature}</h1> */}
//           {/* <h1>Hello from {locationInfo?.City} - This is my server component</h1> */}
//             {/* <h2>Lat: {locationInfo?.Latitude}; Lon: {locationInfo?.Longitude}</h2> */}
//         </>

//     )
// }
