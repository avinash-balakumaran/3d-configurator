import React, { useRef, useState } from "react";
import "@google/model-viewer";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Stage,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { ModernChairModel } from "./ModernChair";
import {
  NEW_FABRIC_LIST,
  NEW_TEXTURE_LIST,
  WOOD_LIST,
  models,
} from "../constant/mock";
import "@google/model-viewer";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

function ARsample() {
  const [customization, setCustomization] = useState({
    fabric: "/assets/textures/Fabric045_1K-JPG/Fabric045_1K-JPG_Color.jpg",
    pillowColor: "",
    frameColor: "",
    meshColor: "",
  });
  const modelRef = useRef();
  const modelViewRef = useRef();
  const [blobUrl, setBlobUrl] = useState();
  const [loading, setLoading] = useState(false);

  const exportModel = () => {
    if (
      customization.fabric &&
      !customization.pillowColor &&
      !customization.frameColor &&
      !customization.meshColor
    ) {
      const index = NEW_TEXTURE_LIST.findIndex(
        (value) => value === customization.fabric
      );

      console.log("aaa");

      console.log(index);
      console.log(models[index]);
      setBlobUrl(models[index]);
      return;
    }

    const exporter = new GLTFExporter();
    const scene = modelRef.current.parent;

    exporter.parse(
      scene,
      (result) => {
        const blob = new Blob([JSON.stringify(result)], {
          type: "application/json",
        });

        uploadToCloudinary(blob);
      },
      { binary: true }
    );
  };

  const uploadToCloudinary = (blob) => {
    const CLOUD_NAME = "dqqqzyw3c";
    const UPLOAD_PRESET = "cloud_upload";

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`;
    const formData = new FormData();

    formData.append("file", blob);
    formData.append("upload_preset", UPLOAD_PRESET);

    setLoading(true);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setBlobUrl(res.secure_url);
      });
  };

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
          src={blobUrl}
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

      <div className={loading ? "loaderContainer" : "loaderHide"}>
        <img src={"/loader.gif"} className={"loader"} />
      </div>
    </div>
  );
}

export default ARsample;
