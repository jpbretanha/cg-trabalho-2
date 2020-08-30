import React, { useRef } from 'react'

import useFish from './useFish'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, ...shark } = useFish(props, group, '/shark.glb')

  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...shark} scale={[6, 6, 6]}>
        <group rotation={[-Math.PI / 2, 0, 180]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0.17, -0.47]}>
              <primitive object={nodes.GLTF_created_0_rootJoint} />
              <skinnedMesh
                material={materials.SharkDark}
                geometry={nodes.Mesh_0.geometry}
                skeleton={nodes.Mesh_0.skeleton}
              />
              <skinnedMesh
                material={materials.SharkLight}
                geometry={nodes.Mesh_1.geometry}
                skeleton={nodes.Mesh_1.skeleton}
              />
              <skinnedMesh
                material={materials.Claws}
                geometry={nodes.Mesh_2.geometry}
                skeleton={nodes.Mesh_2.skeleton}
              />
            </group>
          </group>
        </group>
      </scene>
    </group>
  )
}
