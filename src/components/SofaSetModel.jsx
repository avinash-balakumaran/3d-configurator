/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/sofa_set.glb 
Author: FREEDomplant (https://sketchfab.com/freedomplant1st)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/sofa-set-2fc4feb7793144f5ae04901082d4d3d2
Title: SOFA SET
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function SofaSetModel(props) {
  const { nodes, materials } = useGLTF("/sofa_set.glb");
  const { customization } = props;
  let textureProps;

  console.log(customization, "cusss");

  if (customization.fabric) {
    textureProps = useTexture({
      map: customization.fabric,
    });

    textureProps.map.repeat.set(2, 2);
    textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.324, -0.129, -0.029]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.363, 0.377, 0.452]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.389, -1.137, -0.01]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.417, 0.405, 0.533]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.389, -0.145, -0.022]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.417, 0.405, 0.533]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.882, 1.292, 0.791]}
          rotation={[Math.PI / 4, 0, 0]}
          scale={[0.553, 0.411, 0.525]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.274, 1.178, 0.718]}
          rotation={[Math.PI / 4, 0, 0]}
          scale={[0.553, 0.411, 0.525]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Scene_-_Root"]}
          position={[-0.196, 1.132, 0.772]}
          rotation={[Math.PI / 4, 0, 0]}
          scale={[0.553, 0.388, 0.495]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.708, 0.291, 0.758]}
          rotation={[0, Math.PI / 4, Math.PI / 2]}
          scale={[0.553, 0.411, 0.525]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.214, 0.863, -0.022]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.35, 0.423, 0.533]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.364, 0.571, 0.727]}
          rotation={[0, -0.96, -1.571]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.389, 0.839, -0.022]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.417, 0.423, 0.533]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials["Scene_-_Root"]}
          position={[-0.501, 0.839, -0.022]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.417, 0.423, 0.533]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.403, 0.839, -0.022]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.417, 0.423, 0.533]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.357, -1.387, 0.734]}
          rotation={[-Math.PI / 4, 0, -Math.PI]}
          scale={[0.553, 0.411, 0.525]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.036, -1.062, -0.029]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.363, 0.377, 0.452]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.71, -0.646, 0.769]}
          rotation={[0, Math.PI / 4, Math.PI / 2]}
          scale={[0.553, 0.411, 0.525]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.665, 0.866, 0.426]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.875, 0.547, 0.582]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.315, -0.129, 0.219]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.312, -0.107, 0.367]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.416, 1.08, 0.459]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.316, -0.133, -0.01]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.052, -1.067, 0.219]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.372, 1.076, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_43.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.251, 0.841, 0.235]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.261, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_45.geometry}
          material={materials["Scene_-_Root"]}
          position={[-0.156, 1.459, 0.431]}
          rotation={[0, 0, -Math.PI]}
          scale={[3.466, 0.547, 0.582]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_47.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.393, 0.867, 0.219]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.178, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_49.geometry}
          material={materials["Scene_-_Root"]}
          position={[-0.493, 0.866, 0.219]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.178, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_51.geometry}
          material={materials["Scene_-_Root"]}
          position={[1.205, 0.847, 0.374]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.327, 0.841, 0.467]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_53.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.391, 0.848, 0.374]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.327, 1.101, 0.482]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_55.geometry}
          material={materials["Scene_-_Root"]}
          position={[-0.52, 0.858, 0.374]}
          scale={[1.26, 1.101, 0.482]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_57.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.398, 0.867, 0.219]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.178, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_59.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.056, -1.061, -0.006]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_61.geometry}
          material={materials["Scene_-_Root"]}
          position={[0.049, -1.045, 0.357]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.35, 1.029, 0.431]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_63.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.371, -1.743, 0.426]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.875, 0.547, 0.582]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_65.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.978, -0.253, 0.426]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[2.889, 0.547, 0.582]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_67.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.426, 0.861, 0.374]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.26, 1.101, 0.482]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_69.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.402, -1.131, -0.01]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_71.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.406, -1.103, 0.367]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.416, 1.08, 0.474]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_73.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.405, -1.127, 0.219]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_75.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.405, -0.129, 0.219]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_77.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.402, -0.133, -0.01]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.248, 1, 1]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_79.geometry}
          material={materials["Scene_-_Root"]}
          position={[-1.406, -0.108, 0.367]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.416, 1.08, 0.504]}
        >
          <meshStandardMaterial {...textureProps} color={customization.color} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/sofa_set.glb");
