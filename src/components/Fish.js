import React, { useRef, useMemo } from 'react'

import useFish from '../hooks/useFish'

import { getFishAnimation } from '../helpers/animations'

export default function Fish() {
  const group = useRef()

  const fishProps = useMemo(() => {
    return getFishAnimation('Orange')
  }, [])

  const { nodes, materials, ...fish } = useFish(fishProps, group, '/fish.glb')

  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...fish} scale={[0.05, 0.05, 0.05]}>
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
