/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/chair/scene.gltf 
Author: paolodl (https://sketchfab.com/paolodl)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ergonomic-office-chair-11161117c2c142bd8307d2c3975ee730
Title: Ergonomic office chair
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("chair/scene.gltf");
  const { customization } = props;

  let textureProps;
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
          position={[0, 3.542, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 93.146]}
        >
          <mesh
            geometry={nodes.red_digita_chair_speaker_0.geometry}
            material={materials.speaker}
          >
            <meshStandardMaterial color={customization.armColor} />
          </mesh>
          <mesh
            geometry={nodes.red_digita_chair_Metal_0.geometry}
            material={materials.Metal}
          >
            <meshStandardMaterial color={"black"} />
          </mesh>

          <mesh
            geometry={nodes.red_digita_chair_red_0.geometry}
            material={materials.material}
          >
            {customization.fabric && <meshStandardMaterial {...textureProps} />}
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("chair/scene.gltf");