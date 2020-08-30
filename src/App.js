import * as THREE from 'three'
import React, { Suspense, useState, useRef, useCallback, useMemo } from 'react'
import { Canvas, Dom, useFrame } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import lerp from 'lerp'

import Fishes from './components/Fishes'
import Plane from './components/Plane'
import Sardine from './components/Sardine'
import Particles from './components/Particles'
import Effects from './components/Effects'
import Sparks from './components/Sparks'
import Food from './components/Food'

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
  const [down, set] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  )
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
        camera={{ fov: 100, position: [0, 0, 50] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor(new THREE.Color('#020207'))
        }}
      >
        {/* <color attach='background' args={['lightblue']} /> */}
        {/* <ambientLight intensity={2} /> */}
        {/* <hemisphereLight intensity={0.35} /> */}
        <pointLight distance={100} intensity={1} color='white' />
        <Physics gravity={[0, 0, -2]}>
          <Plane rotation={[-Math.PI / 2, 0, 0]} color='white' />
          {/* <Food number={200} /> */}
          <Suspense fallback={<Dom center>loading ...</Dom>}>
            {/* <Rig> */}
            <Particles count={10} mouse={mouse} />
            <Sparks count={20} mouse={mouse} radius={20} colors={['#1d4c8d', '#e0feff', '#1d4c8d', 'lightblue']} />
            <Fishes count={20} />
            {Array.from({ length: 40 }).map((_, index) => {
              return <Sardine index={index} />
            })}
            <Effects down={down} mouse={mouse} />
            {/* </Rig> */}
          </Suspense>
        </Physics>
      </Canvas>
    </>
  )
}

export default App
