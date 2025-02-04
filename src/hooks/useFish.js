import * as THREE from 'three'
import { useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model(props, ref, url) {
  const { speed, factor } = props
  const { nodes, materials, animations } = useLoader(GLTFLoader, url, draco('/draco-gltf/'))

  const [mixer] = useState(() => new THREE.AnimationMixer())
  useEffect(() => {
    if (animations && animations.length > 0) mixer.clipAction(animations[0], ref.current).play()
  }, [animations, mixer, ref])
  useFrame((_, delta) => {
    ref.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
    mixer.update(delta * speed)
  })

  return {
    ...props,
    nodes,
    materials
  }
}
