/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/scene.gltf 
Author: InGameStudio (https://sketchfab.com/ingamestudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-vasa-ba810cbc547d43e7961a52854a42dd7d
Title: Chair Vasa
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function ModernChairModel(props) {
  const { nodes, materials } = useGLTF("chair_vasa/scene.gltf");
  const { customization } = props;
  let textureProps;

  console.log(customization, "cuss");

  if (customization.fabric) {
    textureProps = useTexture({
      map: customization.fabric,
    });

    textureProps.map.repeat.set(2, 2);
    textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  }

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[400, 0, -600]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Cylinder_Metal_0.geometry}
            material={materials.Metal}
            position={[0, 0, 0.05]}
            scale={[1, 1, 0.92]}
          >
            {customization.frameColor && (
              <meshStandardMaterial color={customization.frameColor} />
            )}
          </mesh>
          <mesh
            geometry={nodes.Cube_Metal001_0.geometry}
            material={materials["Metal.001"]}
            position={[0, 0.246, 3.177]}
            rotation={[0.566, 0, 0]}
            scale={0.035}
          ></mesh>
          <mesh
            geometry={nodes.Sphere007_Metal_0.geometry}
            material={materials.Metal}
            position={[-0.009, 0.183, 1.644]}
            rotation={[0.273, 0, 0]}
          >
            {customization.meshColor && (
              <meshStandardMaterial color={customization.meshColor} />
            )}
          </mesh>
          <mesh
            geometry={nodes.Plane011_Pellow_0.geometry}
            material={materials.Pellow}
            position={[0.016, -0.202, 1.369]}
            rotation={[-1.259, 0, -Math.PI]}
          >
            <meshStandardMaterial
              color={customization.pillowColor}
              {...textureProps}
            />
          </mesh>
          <mesh
            geometry={nodes["B��zierCurve005_Metal001_0"].geometry}
            material={materials["Metal.001"]}
            position={[-0.008, 0.274, 3.026]}
            rotation={[-Math.PI / 2, 0, 2.884]}
            scale={0.028}
          ></mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("chair_vasa/scene.gltf");