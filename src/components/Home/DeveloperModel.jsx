import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const DeveloperModel = () => {
  const meshRef = useRef()
  // Using a reliable public 3D model from the Three.js examples
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.y = Math.sin(time / 4) * 0.3
    }
  })

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={[0.8, 0.8, 0.8]}
      position={[0, -1, 0]}
    />
  )
}

// Preload the new model URL
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

export default DeveloperModel