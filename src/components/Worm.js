import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'
import { useBox } from 'use-cannon'

export default function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, '/worm.glb', draco('/draco-gltf/'))
  const [ref] = useBox(() => ({ mass: 1, position: [0, 0, 15], rotation: [0.4, 0.5, 0.5], ...props }))
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.18, -0.37, -0.13]} rotation={[-3.14, 1.4, 1.32]}>
          <group rotation={[-Math.PI, 0, 0]}>
            <mesh material={materials['Scene_-_Root']} geometry={nodes.Layer_1__0.geometry} />
            <mesh material={materials['Scene_-_Root']} geometry={nodes.Layer_2eyes__0.geometry} />
            <mesh material={materials['Scene_-_Root']} geometry={nodes.Layer_3__0.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}
