import React from 'react'
import { usePlane } from 'use-cannon'

export default function Plane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshPhongMaterial attach='material' color={color} />
    </mesh>
  )
}
