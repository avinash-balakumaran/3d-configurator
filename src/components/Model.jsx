import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { customization } = props;
  const { nodes, materials } = useGLTF("office_chair_1/scene.gltf");

  let textureProps;
  if (customization.fabric) {
    textureProps = useTexture({
      map: customization.fabric,
      displacementMap: customization.fabric,
      normalMap: customization.fabric,
      roughnessMap: customization.fabric,
      aoMap: customization.fabric,
    });

    textureProps.map.repeat.set(2, 2);
    textureProps.displacementMap.repeat.set(2, 2);
    textureProps.normalMap.repeat.set(2, 2);
    textureProps.roughnessMap.repeat.set(2, 2);
    textureProps.aoMap.repeat.set(2, 2);
    textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  }

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.005, 0, 0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.967}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              geometry={nodes.Leg_LP4_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-3.462, 0, 10.655]}
              rotation={[-Math.PI, Math.PI / 5, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.Leg_LP1_lambert1_0.geometry}
              material={materials.lambert1}
            ></mesh>
            <mesh
              geometry={nodes.Wheel_LP_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-58.139, 0, 48.659]}
              rotation={[-Math.PI, 0.114, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.pCylinder25_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-58.139, 0, 48.659]}
              rotation={[-Math.PI, 0.114, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.ChairBack_LP_lambert1_0.geometry}
              material={materials.lambert1}
            >
              {customization.fabric && (
                <meshStandardMaterial {...textureProps} />
              )}
            </mesh>
            <mesh
              geometry={nodes.ChairSeat_LP4_lambert1_0.geometry}
              material={materials.lambert1}
            >
              {customization.fabric && (
                <meshStandardMaterial {...textureProps} />
              )}
            </mesh>
            <mesh
              geometry={nodes.pCylinder26_lambert1_0.geometry}
              material={materials.lambert1}
              position={[31.27, 0, -31.948]}
              rotation={[0, 0.895, 0]}
            ></mesh>
            <mesh
              geometry={nodes.Wheel_LP1_lambert1_0.geometry}
              material={materials.lambert1}
              position={[31.27, 0, -31.948]}
              rotation={[0, 0.895, 0]}
            ></mesh>
            <mesh
              geometry={nodes.Leg_LP5_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-5.602, 0, 4.07]}
              rotation={[0, 1.257, 0]}
            ></mesh>
            <mesh
              geometry={nodes.Underside_LP_lambert1_0.geometry}
              material={materials.lambert1}
            ></mesh>

            {customization.arms && (
              <>
                <mesh
                  geometry={nodes.pCube38_lambert1_0.geometry}
                  material={materials.lambert1}
                >
                  <meshStandardMaterial color={customization.armColor} />
                </mesh>

                <mesh
                  geometry={nodes.pCube37_lambert1_0.geometry}
                  material={materials.lambert1}
                  position={[-33.983, 64.178, -14.779]}
                  scale={[0.061, 0.036, 0.062]}
                >
                  <meshStandardMaterial color={customization.armColor} />
                </mesh>
              </>
            )}
            <mesh
              geometry={nodes.Wheel_LP2_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-3.632, 0, 3.211]}
              rotation={[0, 1.2, 0]}
            ></mesh>
            <mesh
              geometry={nodes.pCylinder27_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-3.632, 0, 3.211]}
              rotation={[0, 1.2, 0]}
            ></mesh>

            <mesh
              geometry={nodes.pCylinder28_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-26.088, 0, -16.813]}
              rotation={[-Math.PI, 0.492, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.Wheel_LP3_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-26.088, 0, -16.813]}
              rotation={[-Math.PI, 0.492, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.Leg_LP3_lambert1_0.geometry}
              material={materials.lambert1}
              position={[3.463, 0, 10.655]}
              rotation={[-Math.PI, -Math.PI / 5, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.pCylinder29_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-64.369, 0, -4.511]}
              rotation={[-Math.PI, 0.495, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.Wheel_LP4_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-64.369, 0, -4.511]}
              rotation={[-Math.PI, 0.495, -Math.PI]}
            ></mesh>
            <mesh
              geometry={nodes.Leg_LP2_lambert1_0.geometry}
              material={materials.lambert1}
              position={[5.602, 0, 4.07]}
              rotation={[0, -1.257, 0]}
            ></mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("office_chair_1/scene.gltf");
