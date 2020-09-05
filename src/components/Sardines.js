import React from 'react'
import { useControl } from 'react-three-gui'

import Sardine from './Sardine'

const Sardines = () => {
  const count = useControl('Sardinhas', {
    type: 'number',
    min: 0,
    max: 100,
    value: 40
  })

  return Array.from({ length: count }).map((_, index) => {
    return <Sardine index={index} />
  })
}

export default Sardines
