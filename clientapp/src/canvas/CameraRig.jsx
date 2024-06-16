import React from 'react';
import {useFrame } from '@react-three/fiber';
import {easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = () => {
  const snap = useSnapshot(store);
  return (
    <div>CameraRig</div>
  )
}

export default CameraRig

//positioning or viewing angle of the camera for tshirt