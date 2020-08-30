import React, { useRef, useMemo } from 'react'

import useFish from '../hooks/useFish'

import { getSardineAnimation } from '../helpers/animations'

export default function Model(props) {
  const ref = useRef()

  const sardineProps = useMemo(() => {
    return getSardineAnimation()
  }, [])

  const { nodes, materials, ...fish } = useFish(sardineProps, ref, '/sardine.glb')

  return (
    <group ref={ref} dispose={null}>
      <scene name='Scene' {...fish} scale={[40, 40, 40]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, 0]} scale={[0.02, 0.02, 0.02]}>
            <mesh material={materials.fish} geometry={nodes.Sphere_fish_0.geometry} />
          </group>
        </group>
      </scene>
    </group>
  )
}
