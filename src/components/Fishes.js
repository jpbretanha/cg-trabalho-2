import React, { useMemo } from 'react'

import Fish from './Fish'
import BlueFish from './BlueFish'

export default function Fishes({ count }) {
  const fishes = useMemo(
    () =>
      new Array(count).fill().map((_, index) => {
        const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
        const y = -10 + Math.random() * 20
        const z = -5 + Math.random() * 20
        const fish = ['Orange', 'Blue'][Math.round(Math.random() * 1)]
        const speed = fish === 'Orange' ? 2 : 5
        const factor = fish === 'Orange' ? 0.25 + Math.random() : 1 + Math.random() - 0.5

        return {
          x,
          y,
          z,
          speed,
          factor,
          fish
        }
      }),
    [count]
  )

  console.log(fishes)

  return fishes.map(({ x, y, z, fish, ...props }, index) => {
    return <BlueFish key={index} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} {...props} />
    if (fish === 'Orange') {
      return <Fish key={index} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} {...props} />
    }
    return <BlueFish key={index} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} {...props} />
  })
}
