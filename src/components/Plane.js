import React from 'react'
import { usePlane } from 'use-cannon'

export default function Plane({ color, ...props }) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
      <shadowMaterial attach='material' color={color || '#171717'} opacity={0.5} />
    </mesh>
  )
}
