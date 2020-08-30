import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/sardine.glb', draco('/draco-gltf/'))
  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...props}>
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
