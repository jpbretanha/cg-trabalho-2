import React, { useRef } from 'react'

import useFish from './useFish'

export default function Model(props) {
  const group = useRef()

  const { nodes, materials, ...fish } = useFish(props, group, '/angler-fish.glb')

  return (
    <group ref={group} dispose={null} scale={[15, 15, 15]}>
      <scene name='Scene' {...fish}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[0, -0.07, 0]} scale={[0.01, 0.01, 0.01]}>
              <group position={[0, -25.96, -4.27]} />
              <group position={[0, 0.11, 12.56]} rotation={[0, 0.09, 0]} />
            </group>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              material={materials.unshaded_angler}
              geometry={nodes.angler_geo_unshaded_angler_0.geometry}
              skeleton={nodes.angler_geo_unshaded_angler_0.skeleton}
            />
          </group>
        </group>
      </scene>
    </group>
  )
}
