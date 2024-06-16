import React from 'react'
import {easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';



// easing haru three js ko property use garna ko lagi 

const Shirt = () => {
  const snap = useSnapshot(state);
  //use const nodes and materials and useGLTF hook and point the path which you want as 3d.
  const {nodes, materials } = useGLTF('./shirt_baked.glb');

  //lets create two texture that we are going to apply to that shirt .
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    // instead of rendering a div, we can render a group that group have mesh elmt and that mesh have couple of properties.
    <group>
      <mesh
      castShadow  
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose = {null}
      
    >

      </mesh>
    </group>
  )
}

export default Shirt
















// actual shirt model 