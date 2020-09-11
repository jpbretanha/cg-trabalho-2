import * as THREE from 'three'
import React, { Suspense, useRef, useCallback } from 'react'
import { Canvas, Dom } from 'react-three-fiber'

import Fishes from './components/Fishes'
import Sardines from './components/Sardines'
import Particles from './components/Particles'
import Effects from './components/Effects'
import Sparks from './components/Sparks'

import { ControlsProvider, Controls } from 'react-three-gui'

const App = () => {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  )
  return (
    <ControlsProvider>
      <Canvas
        concurrent
        shadowMap
        sRGB
        onMouseMove={onMouseMove}
        gl={{ alpha: false }}
        camera={{ fov: 100, position: [0, 0, 50] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor(new THREE.Color('#020207'))
        }}
      >
        <pointLight distance={100} intensity={1} color='white' />
        <Suspense fallback={<Dom center>loading ...</Dom>}>
          <Particles count={10000} mouse={mouse} />
          <Sparks count={20} mouse={mouse} radius={20} colors={['#e0feff', '#1d4c8d', 'lightblue']} />
          <Fishes />
          <Sardines />
          <Effects />
        </Suspense>
      </Canvas>
      <Controls title='Controles' />
    </ControlsProvider>
  )
}

export default App
