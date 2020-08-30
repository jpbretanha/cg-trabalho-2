import React, { useRef } from 'react'
import useFish from './useFish'

export default function BlueFish(props) {
  const group = useRef()
  const { nodes, materials, ...fish } = useFish(props, group, '/blue-fish.glb')
  console.log(group)
  return (
    <group ref={group} {...fish} dispose={null}>
      <scene name='Scene' {...fish}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={nodes.Armature_rootJoint} />
          <skinnedMesh
            material={materials['Material.001']}
            geometry={nodes.Circle_0.geometry}
            skeleton={nodes.Circle_0.skeleton}
          />
          <group position={[7.98, -4.88, 5.73]} />
        </group>
      </scene>
    </group>
  )
}
