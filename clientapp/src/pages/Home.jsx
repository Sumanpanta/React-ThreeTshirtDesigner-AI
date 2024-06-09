import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot} from 'valtio';

import state from '../store';
// animation/motion work garauna ko lagi:  
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,

} from '../config/motion';


const Home = () => {
  const snap = useSnapshot(state);  //one currrent snapshot of that state(cnst snap)
  return (
    <div>Home</div>
  )
}

export default Home