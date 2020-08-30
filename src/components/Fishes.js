import React, { useMemo } from 'react'

import Fish from './Fish'
import BlueFish from './BlueFish'
import Shark from './Shark'
import HammerHead from './HammerHead'

export default function Fishes({ count }) {
  const fishes = useMemo(
    () =>
      Array.from({ length: count }).map(() => {
        const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
        const y = -15 + Math.random() * 20
        const z = -15 + Math.random() * 20
        const fish = ['Orange', 'Blue', 'Shark', 'HammerHead'][Math.round(Math.random() * 3)]
        const speed = fish === 'Shark' ? 0.3 : fish === 'Orange' ? 2 : 5
        const factor =
          fish === 'Shark' ? 0.3 + Math.random() : fish === 'Orange' ? 0.25 + Math.random() : 1 + Math.random() - 0.5

        return {
          speed,
          factor,
          fish,
          position: [x, y, z],
          rotation: [0, x > 0 ? Math.PI : 0, 0]
        }
      }),
    [count]
  )

  console.log(fishes)

  return fishes.map(({ x, y, z, fish, ...props }, index) => {
    if (fish === 'Orange') {
      return <Fish key={index} {...props} />
    }
    if (fish === 'HammerHead') {
      return <HammerHead key={index} {...props} />
    }
    if (fish === 'Shark') {
      return <Shark key={index} {...props} />
    }
    return <BlueFish key={index} {...props} />
  })
}
