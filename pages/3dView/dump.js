// import './App.css';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// import { MarkersPlugin, ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

// const MarkersPlugin = dynamic(
//     () =>
//       import('react-photo-sphere-viewer').then(
//         (mod) => mod.MarkersPlugin
//       ),
//     {
//       ssr: false,
//     }
//   );

export default function Home() {
//   const photoSphereRef = useRef();

//   const handleClick = () => {
//     photoSphereRef.current.animate({
//       latitude: 0,
//       longitude: 0,
//       zoom: 55,
//       speed: '10rpm',
//     });
//   }

  const [markersManager, setMarkerManager] = React.useState();
  const pSRef = React.useCallback((node) => {
    const markersPlugs = node?.getPlugin(MarkersPlugin);
    setMarkerManager(markersPlugs);
  }, []);

  

  useEffect(() => {
    if (markersManager) {
      console.log(markersManager);
      markersManager.on("select-marker", (e, marker, data) => {
        console.log("asd");
      });
      markersManager.on("over-marker", (e, marker) => {
        console.log(`Cursor is over marker ${marker.id}`);
      });
    }
  }, [markersManager]);


  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers
        markers: [
          {
            // image marker that opens the panel when clicked
            id: "image",
            longitude: 0.33,
            latitude: 0.1,
            image: "pin-blue.png",
            width: 32,
            height: 32,
            anchor: "bottom center",
            tooltip: "Mountain peak. <b>Click me!</b>"
          }
        ]
      }
    ]
  ];

  const handleClick = (data) => {
    console.log(data);
  };
  
  return (
    <div 
    // className="App"
    >
      {/* <ReactPhotoSphereViewer ref={photoSphereRef} src="test_pano.jpg" height={'100vh'} width={"100%"} onClick={handleClick}></ReactPhotoSphereViewer> */}
      <ReactPhotoSphereViewer
        ref={pSRef}
        src="Test_Pano.jpg"
        height={"100vh"}
        width={"100%"}
        littlePlanet={false}
        onClick={handleClick}
        plugins={plugins}
      ></ReactPhotoSphereViewer>
    </div>
  );
}