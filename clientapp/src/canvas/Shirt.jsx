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

  //yeha nira smooth color ko lagi yo use gareko xa hai :see docs,CameraRig
  useFrame((state,delta) => easing.dampC(materials.lambert1.color, snap.color,0.25,delta));

// aba yo changes automatic render huna ko lagi group ma key create garnu parxa, it cannot be use as state(direcly)
// recreate string of current state 
const stateString = JSON.stringify(snap);

  return (
    // instead of rendering a div, we can render a group that group have mesh elmt and that mesh have couple of properties.
    <group
    key={stateString}
    >
      <mesh
      castShadow  
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose = {null}


    >
      {/* full texture dekhauni vaye if vanera position haru sabbai Decal ma */}
      {snap.isFullTexture &&(
        <Decal 
        position={[0,0,0]}
        rotation = {[0,0,0]}
        scale={1}
        map={fullTexture}
        />
      )}
      {snap.isLogoTexture&&(
        <Decal
        position={[0,0.04,0.15]}
        rotation={[0,0,0]}
        scale={0.15}
        map={logoTexture}
        // changing quality of the texture
        map_asinotropy = {16}
        depthTest={false}
        depthWrite={true}
        />
      )}

      </mesh>
    </group>
  )
}

export default Shirt
















// actual shirt model 