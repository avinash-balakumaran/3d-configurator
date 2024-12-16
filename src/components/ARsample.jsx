import React, { useRef, useState, useEffect } from "react";
import "@google/model-viewer";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Stage,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { ModernChairModel } from "./ModernChair";
import { NEW_FABRIC_LIST, NEW_TEXTURE_LIST, WOOD_LIST } from "../constant/mock";
import "@google/model-viewer";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

function ARsample() {
  const [customization, setCustomization] = useState({
    fabric: "/assets/textures/Fabric045_1K-JPG/Fabric045_1K-JPG_Color.jpg",
    pillowColor: "",
    frameColor: "",
    meshColor: "",
  });
  const button = useRef();
  const modelRef = useRef();
  const modelViewRef = useRef();
  const [blobUrl, setBlobUrl] = useState();

  const exportModel = () => {
    const exporter = new GLTFExporter();
    const scene = modelRef.current.parent;

    exporter.parse(
      scene,
      (result) => {
        if (result instanceof ArrayBuffer) {
          const blob = new Blob([result], { type: "application/octet-stream" });
          const url = URL.createObjectURL(blob);
          setBlobUrl(url);
        } else {
          const blob = new Blob([JSON.stringify(result)], {
            type: "application/json",
          });
          const url = URL.createObjectURL(blob);
          setBlobUrl(url);
        }
      },
      { binary: true }
    );

    // button.current.click();
  };

  console.log(blobUrl, "blob url");

  return (
    <div className="app">
      <div className="productViewContainer">
        <Canvas>
          <PresentationControls
            speed={1}
            zoom={1}
            polar={[-1, Math.PI / 4]}
            rotation={[0, 0, 0]}
          >
            <OrbitControls enableZoom={true} minDistance={2} maxDistance={15} />
            <Stage intensity={0.6} castShadow={false}>
              <mesh ref={modelRef}>
                <ModernChairModel customization={customization} />
              </mesh>
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      <div className="customizerContainer">
        <div className="customizer">
          <b>Select a pillow fabric</b>
          <div className="fabricListGrid">
            {NEW_TEXTURE_LIST.map((value) => (
              <img
                src={value}
                height={100}
                width={100}
                onClick={() => {
                  setCustomization({
                    ...customization,
                    fabric: value,
                  });
                }}
              />
            ))}
          </div>
        </div>

        <div className="customizer">
          <b>Select a pillow Color</b>

          <div>
            <input
              type="color"
              value={customization.color}
              onChange={(e) => {
                setCustomization({
                  ...customization,
                  pillowColor: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="customizer">
          <b>Select a frame Color</b>

          <div>
            <input
              type="color"
              value={customization.color}
              onChange={(e) => {
                setCustomization({
                  ...customization,
                  frameColor: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="customizer">
          <b>Select a mesh Color</b>

          <div>
            <input
              type="color"
              value={customization.color}
              onChange={(e) => {
                setCustomization({
                  ...customization,
                  meshColor: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <button style={{ height: 50, width: 80 }} onClick={exportModel}>
          VIEW AR
        </button>
      </div>

      {blobUrl && (
        <model-viewer
          src={"/chair_vasa/scene.gltf"}
          alt="A 3D model"
          id="model-viewer"
          ar
          ar-placement="floor"
          ar-modes="scene-viewer quick-look webxr"
          camera-controls
          ref={modelViewRef}
        >
          {/* <button slot="ar-button" ref={button}></button> */}
        </model-viewer>
      )}
    </div>
  );
}

export default ARsample;
