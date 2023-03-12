import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RenderTexture, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'

export default function BlurbWithText() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Blurb />
      <ContactShadows frames={1} position={[0, -1, 0]} blur={4} opacity={0.5} />
      <ContactShadows frames={1} position={[0, -1, 0]} blur={3} opacity={0.4} color="orange" />
      </>
  )
}

function Blurb() {
  const text1Ref = useRef()
  const text2Ref = useRef()
  const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end
  }
  useFrame((state) => {
    const dist = 3

    const t1 = Math.cos(state.clock.elapsedTime)
    const p = t1 < 0 ? -1 : 1
    const prev1 = text1Ref.current.position.x
    const t2 = lerp(prev1 - dist, p * dist, 0.2)
    
    text1Ref.current.position.x = dist + t2
    text2Ref.current.position.x = t2 - dist
  })
  return (
    <mesh position={[0,0,1]}>
      <sphereGeometry />
      <meshStandardMaterial>
        <RenderTexture width={1080} attach="map" anisotropy={32}>
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <color attach="background" args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={text1Ref} fontSize={0.3} color="#555">
            {'     '}Web{'\n'}Developer
          </Text>
          <Text ref={text2Ref} fontSize={0.3} color="#555">
            {'    '}Game{'\n'}Developer
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}
