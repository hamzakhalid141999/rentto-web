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
  const photoSphereRef = useRef();

//   const handleClick = () => {
//     photoSphereRef.current.animate({
//       latitude: 0,
//       longitude: 0,
//       zoom: 55,
//       speed: '10rpm',
//     });
//   }

  const [markersManager, setMarkerManager] = React.useState();
  // const pSRef = React.useCallback((node) => {
  //   const markersPlugs = node?.getPlugin(MarkersPlugin);
  //   setMarkerManager(markersPlugs);
  // }, []);

  

  // useEffect(() => {
  //   if (markersManager) {
  //     console.log(markersManager);
  //     markersManager.on("select-marker", (e, marker, data) => {
  //       console.log("asd");
  //     });
  //     markersManager.on("over-marker", (e, marker) => {
  //       console.log(`Cursor is over marker ${marker.id}`);
  //     });
  //   }
  // }, [markersManager]);


  // const plugins = [
  //   [
  //     MarkersPlugin,
  //     {
  //       // list of markers
  //       markers: [
  //         {
  //           // image marker that opens the panel when clicked
  //           id: "image",
  //           longitude: 0.33,
  //           latitude: 0.1,
  //           image: "pin-blue.png",
  //           width: 32,
  //           height: 32,
  //           anchor: "bottom center",
  //           tooltip: "Mountain peak. <b>Click me!</b>"
  //         }
  //       ]
  //     }
  //   ]
  // ];

  const handleClick = (data) => {
    console.log(data);
  };
  
  return (
    <div 
    // className="App"
    >
      <ReactPhotoSphereViewer ref={photoSphereRef} src="https://rentto-dev-storage-6028e19594933-staging.s3.amazonaws.com/public/test_pano.jpg?AWSAccessKeyId=ASIAT6EAMDI45HAEYBYD&Expires=1670341407&Signature=FYn5BmCRxhp%2FneSmJF8P9wMBoAA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQC2gYWgf%2F5LY9BQ4tL2I0iHFa7fU7rizsol1eUZRiAL0QIgX1khNNWBzhqWA9J6uhTS5zI2JWvim08KfnGnJF4aY9kqxAQIGRAAGgwyNzA4NTIxNjgyNDkiDHJEe8tB12Ym2JiIiCqhBJnmWn%2Bq1areWJsqNYSJ%2BLptfMB6%2Fq9GkSXfg4daKJk4UGWKbiGKYAthNtbcpZKLSzJWzKJvjDCWR3s39Vx4lXbdekd18mB%2FHbGl15pePJwHk966GoyMDlImWqq6B5hAqyDHv0TtdxgGcQgeKqZE6txa5BK3DPNnuIj8SDDTZLPHu9UfUoNJqAwuLWB6aLWewU2tgBzzWbsPg%2FLreUK4MYxuhJTPHBcx8KAmTLf1WsOG72ajXgHfJq9COlmDFiSc%2BxRwJn%2FDwDm8n2XDXOefrkzJy%2BVJvNQDaCENeKgr6vTkDImR4I6E7tZDQ92XlKpTFIOubBeTLdnrvlcuKb3ue62kwu81Aj0ObqnZSzH7lLCTuqLKI6i3YC5Whba%2BIGt2V%2BN4XpVxAYMN31KWEYoB0AsqXIaAT3uvYK71KLg9PZeefWLec59GHof8yOIcxf8lQZqWD%2F6KRoI%2B%2B0XrohCX3ampzYSb3NX36X1A2yC86lmKu6YqjyDJxcbnUcG%2FajFEuAHyeCJsZpOiMgwj39e7PHOj5WK3Bfpo8iZD6X%2BC28dgKJDTzC%2FVmk%2FWggxL3sgn41FdLbJtHeNVuuYcYOstoR8MPhAGvlHyBqfzi3d5QYHNTYA267b%2FvpN%2Ff%2FWbE91PeUquWgSUKuvX%2B0LQdFUcPh7JmLNujhuCJnExL36Pi4ZN%2BOhBgb19Umq%2FtNPwStmwpj%2FTPIZ6D5m7uklxf1LNJ4YLMObDvZwGOoUCNXPU0YwyXwuG4g%2B03sd%2Bva6RpZOmEUZOOfBfhI10Gfcc0QtizRZUMAV5fQHIi80K%2BeSO0o8F0CLcOMM3oyes%2ByTHCjFUJ4E3ehZUICDCIxL5cHJOgf4TrTGN8IwLtQyMTXOZLBoKt8F9Ryfioot9yeKh5MmM32TQni90kqC%2FeUfS7gyR2bhZTY%2BmMbx8rAoozT1EbpiEAYaJ1j5lEA0utQYOCeyuUoef4rDufM02tWSvANLY78GCUKV6DFv974lmHiItOENIi2yhBe1KA94AMTAPjQTFPE6zVTAxX%2BHyWj%2Fq22dy2J0Bn2%2Fh4AmDe3ve%2Fz1FjMWt75IePtPIdZ7qGiWqKx3x" height={'100vh'} width={"100%"} onClick={handleClick}></ReactPhotoSphereViewer>
    
      {/* <ReactPhotoSphereViewer ref={photoSphereRef} 
      src='IMG_2975.jpg'
      height={'100vh'} width={"100%"} onClick={handleClick}></ReactPhotoSphereViewer>
     */}
    
      {/* <ReactPhotoSphereViewer
        ref={pSRef}
        src="Test_Pano.jpg"
        height={"100vh"}
        width={"100%"}
        littlePlanet={false}
        onClick={handleClick}
        plugins={plugins}
      ></ReactPhotoSphereViewer> */}
    </div>
  );
}