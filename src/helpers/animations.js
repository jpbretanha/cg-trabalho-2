const fishTypes = ['Orange', 'Blue', 'Shark', 'HammerHead']

export const getFishAnimation = fishType => {
  const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
  const y = -15 + Math.random() * 20
  const z = -15 + Math.random() * 20
  const fish = fishTypes[fishType]
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
}

export const getSardineAnimation = () => {
  const x = (30 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
  const y = -30 + Math.random() * 20
  const z = -30 + Math.random() * 20
  const speed = 50
  const factor = 0.6 + Math.random()

  return {
    speed,
    factor,
    position: [x, y, z],
    rotation: [0, x > 0 ? Math.PI : 0, 0]
  }
}
