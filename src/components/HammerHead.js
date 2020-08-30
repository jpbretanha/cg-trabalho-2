import React, { useRef, useMemo } from 'react'

import useFish from './useFish'

import { getFishAnimation } from '../helpers/animations'

export default function Model() {
  const group = useRef()

  const fishProps = useMemo(() => {
    return getFishAnimation('Hammerhead')
  }, [])

  const { nodes, materials, ...shark } = useFish(fishProps, group, '/hammerhead.glb')

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
