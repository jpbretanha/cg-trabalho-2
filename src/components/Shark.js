import React, { useRef, useMemo } from 'react'

import useFish from '../hooks/useFish'

import { getFishAnimation } from '../helpers/animations'

export default function Model() {
  const group = useRef()

  const fishProps = useMemo(() => {
    return getFishAnimation('Shark')
  }, [])

  const { nodes, materials, ...shark } = useFish(fishProps, group, '/shark.glb')

  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...shark} scale={[6, 6, 6]}>
        <group rotation={[-Math.PI / 2, 0, Math.PI]}>
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
