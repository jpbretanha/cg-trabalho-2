import React, { useRef } from 'react'

import useFish from './useFish'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, ...shark } = useFish(props, group, '/hammerhead.glb')

  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...shark}>
        <group rotation={[-Math.PI / 2, 0, 90]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <primitive object={nodes._rootJoint} />
            <group position={[-100.1, 10.59, -1.79]} />
            <skinnedMesh
              material={materials.lambert2}
              geometry={nodes.pPlane1_lambert2_0.geometry}
              skeleton={nodes.pPlane1_lambert2_0.skeleton}
            />
          </group>
        </group>
      </scene>
    </group>
  )
}
