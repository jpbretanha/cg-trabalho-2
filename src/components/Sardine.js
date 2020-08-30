import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'
import { useBox } from 'use-cannon'

export default function Model(props) {
  const ref = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/sardine.glb', draco('/draco-gltf/'))
  return (
    <group ref={ref} dispose={null}>
      <scene name='Scene' {...props} scale={[50, 50, 50]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.02, 0.02, 0.02]}>
              <mesh material={materials.fish} geometry={nodes.Sphere_fish_0.geometry} />
            </group>
          </group>
        </group>
      </scene>
    </group>
  )
}
