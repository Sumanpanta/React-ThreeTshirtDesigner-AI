import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot} from 'valtio';

import state from '../store';
import { CustomButton } from '../components';     
// animation/motion work garauna ko lagi:  
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,

} from '../config/motion';
// import CustomButton from '../components/CustomButton';


const Home = () => {
  const snap = useSnapshot(state);  //one currrent snapshot of that state

  return (
    // components of framer-motion: enables animation of components that have been removed from tree(read from doc)
   <AnimatePresence>    

    {snap.intro &&(
      <motion.section className='home' {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}>
          <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain' />
        </motion.header>

        <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='xl:block hidden'/> DO IT.
            </h1>
            
          </motion.div>
          {/* below that we can create anther m.d containing p tag */}
          <motion.div {...headContainerAnimation} className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-grey-600 text-base'>
              Create your unique and exclusive shirt with our brand-new 3d
                customization tool. <strong>Unleash your imagination
                </strong>{" "} and define your own style.
            </p>
                {/* self closing cmpnent, button ko lagi  */}
            <CustomButton 
            type= "filled" 
            title = "Customize It"
            handleClick={() => state.intro = false }
            customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
            />

          </motion.div>

        </motion.div>

      </motion.section>
    )}
   </AnimatePresence>
  )
}

export default Home