import {Canvas } from '@react-three/fiber'
import {Environment, Center } from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'


const CanvasModel = () => {
  return (
    // instead of using canvas name, actual canvas model is used where inside many 
    // fxn are used, see doc.(bckdrop shadow fix grna, playing with canvas) shadows huna paryo,
    // cmra position milna pary, feel of view(fov) kasto thulo ki syano dekhni

   <Canvas
      shadows
      camera={{position:[0,0,0], fov:25}}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
      >
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
   </Canvas> 
  )
}

export default CanvasModel