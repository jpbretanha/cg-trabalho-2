import * as THREE from 'three'
import React, { useRef, useMemo, useEffect, useState } from 'react'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { useControl } from 'react-three-gui'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'

import { GlitchPass } from '../shaders/GlitchPass'

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass, FilmPass, GlitchPass })

export default function Effects() {
  const [active, set] = useState(false)
  useControl('Terremoto', {
    type: 'button',
    onClick: () => set(s => !s)
  })

  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(() => new THREE.Vector2(512, 512), [])
  useEffect(() => composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray='passes' scene={scene} camera={camera} />
      <unrealBloomPass attachArray='passes' args={[aspect, 2, 1, 0]} />
      <glitchPass attachArray='passes' factor={active ? 1 : 0} />
    </effectComposer>
  )
}
