import * as THREE from 'three'
import React, { Suspense, useState, useRef, useCallback, useMemo } from 'react'
import { Canvas, Dom, useFrame } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import lerp from 'lerp'

import Fish from './components/Fish'
import Plane from './components/Plane'
import Worm from './components/Worm'
import Button from './components/Button'
import Particles from './components/Particles'
import Effects from './components/Effects'
import Sparks from './components/Sparks'

function Rig({ children }) {
  const outer = useRef()
  const inner = useRef()
  useFrame(({ clock }) => {
    outer.current.position.y = lerp(outer.current.position.y, 0, 0.05)
    inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI
    inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 10
    inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2
  })
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  )
}

const App = () => {
  const [hovered, hover] = useState(false)
  const [down, set] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  )
  const [worms, setWorms] = useState(0)

  const addWorm = () => {
    setWorms(state => state + 1)
  }

  return (
    <>
      <Canvas
        concurrent
        shadowMap
        sRGB
        onMouseMove={onMouseMove}
        onMouseUp={() => set(false)}
        onMouseDown={() => set(true)}
        gl={{ alpha: false }}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor(new THREE.Color('#020207'))
        }}
      >
        {/* <color attach='background' args={['lightblue']} /> */}
        <ambientLight />
        <hemisphereLight intensity={0.35} />
        <pointLight distance={100} intensity={4} color='white' />
        <Physics gravity={[0, 0, -2]}>
          {/* <Plane color={'transparent'} position={[0, 0, -2]} /> */}
          {/* <Plane color={'#1d4c8d'} position={[-6, 0, 0]} rotation={[0, 1, 0]} />
          <Plane color={'#1d4c8d'} position={[6, 0, 0]} rotation={[0, -1, 0]} />
          <Plane color={'#1d4c8d'} position={[0, 6, 0]} rotation={[1, 0, 0]} />
          <Plane color={'#1d4c8d'} position={[0, -6, 0]} rotation={[-1, 0, 0]} /> */}
          <Suspense fallback={<Dom center>loading ...</Dom>}>
            {/* <Rig> */}
            <Fish position={[2, 0, 0]} />
            {Array.from({ length: worms }).map(() => (
              <Worm />
            ))}
            <Particles count={10000} mouse={mouse} />
            <Sparks
              count={20}
              mouse={mouse}
              colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']}
            />
            <Effects down={down} />
            {/* </Rig> */}
          </Suspense>
        </Physics>
      </Canvas>
      <Button onClick={addWorm}>Dar comida</Button>
    </>
  )
}

export default App
