const animationConstants = {
  Orange: {
    speed: 2,
    factor: 0.25 + Math.random()
  },
  BlueFish: {
    speed: 5,
    factor: 1 + Math.random() - 0.5
  },
  Shark: {
    speed: 3,
    factor: 0.3 + Math.random()
  },
  Hammerhead: {
    speed: 5,
    factor: 1 + Math.random() - 0.5
  }
}

export const getFishAnimation = fishType => {
  const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
  const y = -15 + Math.random() * 20
  const z = -15 + Math.random() * 20

  return {
    speed: animationConstants[fishType].speed,
    factor: animationConstants[fishType].factor,
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
