/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/fish.glb', draco('/draco-gltf/'))
  return (
    <group ref={group} {...props} dispose={null} scale={[0.05, 0.05, 0.05]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            material={materials.Material_3}
            geometry={nodes['Fish_Material_#3_0'].geometry}
            skeleton={nodes['Fish_Material_#3_0'].skeleton}
          />
        </group>
      </group>
    </group>
  )
}
