import React from "react";
import {
  PresentationControls,
  Stage,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { ChairModel } from "./Scene";
import { Model } from "./SofaModel";
import { SofaSetModel } from "./SofaSetModel";
import { ModernChairModel } from "./ModernChair";

function ProductViewer(props) {
  const { customization, isConfigurator, isSofaConfigurator, configurator } =
    props;

  return (
    <>
      <PresentationControls
        speed={1}
        zoom={1}
        polar={[-1, Math.PI / 4]}
        // rotation={[Math.PI / 8, Math.PI / 4, 0]}
        rotation={[0, 0, 0]}
      >
        <OrbitControls enableZoom={true} minDistance={2} maxDistance={15} />
        <Stage intensity={0.6} castShadow={false}>
          <Suspense fallback={null}>
            {configurator === "chair" && (
              <ChairModel customization={customization} />
            )}

            {configurator === "sofa" && <Model customization={customization} />}

            {configurator === "longSofa" && (
              <SofaSetModel customization={customization} />
            )}

            {configurator === "modernChair" && (
              <ModernChairModel customization={customization} />
            )}
          </Suspense>
        </Stage>
      </PresentationControls>
    </>
  );
}

export default ProductViewer;
