import React, { useRef } from 'react'

import useFish from './useFish'

export default function Fish(props) {
  const group = useRef()
  const { nodes, materials, ...fish } = useFish(props, group, '/fish.glb')

  return (
    <group ref={group} {...fish} dispose={null} scale={[0.05, 0.05, 0.05]}>
      <scene name='Scene' {...fish}>
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
      </scene>
    </group>
  )
}
