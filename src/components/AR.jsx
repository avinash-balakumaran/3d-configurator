import React, { useRef, useState } from "react";
import { useHitTest, Interactive, useXR } from "@react-three/xr";
import { ModernChairModel } from "./ModernChair";
import {
  PresentationControls,
  Stage,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

function AR(props) {
  const [position, setPosition] = useState();
  const { customization } = props;
  const { isPresenting } = useXR();
  const reticleRef = useRef();
  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    setPosition(position);
  };

  return (
    <>
      <ambientLight />

      {!isPresenting && (
        <PresentationControls
          speed={1}
          zoom={1}
          polar={[-1, Math.PI / 4]}
          // rotation={[Math.PI / 8, Math.PI / 4, 0]}
          rotation={[0, 0, 0]}
        >
          <OrbitControls enableZoom={true} minDistance={2} maxDistance={15} />
          <Stage intensity={0.6} castShadow={false}>
            <ModernChairModel customization={customization} />
          </Stage>
        </PresentationControls>
      )}

      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh
            ref={reticleRef}
            rotation-x={-Math.PI / 2}
            position={[0, 0, -5]}
          >
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"blue"} />
          </mesh>
        </Interactive>
      )}

      {isPresenting && position && (
        <mesh position={position}>
          <ModernChairModel
            customization={customization}
            position={position}
            scale={0.5}
          />
        </mesh>
      )}
    </>
  );
}

export default AR;
