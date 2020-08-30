import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import { useBox } from 'use-cannon'

function Food({ number }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.1],
    position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5]
  }))

  useFrame(() => api.at(Math.floor(Math.random() * number)).position.set(0, Math.random() * 2, 0))

  return (
    <instancedMesh receiveShadow castShadow ref={ref} args={[null, null, number]}>
      <boxBufferGeometry attach='geometry' args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[new Float32Array(number * 3), 3]} />
      </boxBufferGeometry>
      <meshLambertMaterial attach='material' vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}
export default Food
