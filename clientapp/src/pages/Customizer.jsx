import React,{useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import {download} from '../assets';
import {downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import {fadeAnimation, slideAnimation} from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tabs  } from '../components';

const Customizer = () => {
  // we gonna check, are we on the homepage or in customizer, for that we use snapshot state,
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {!snap.intro &&(
          <>
            
            <motion.div key="custom"
            className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>

              <div className='flex items-center min-h-screen'>
                <div className='editortabs-container tabs'>
                  {EditorTabs.map((tab)=>(
                    <Tabs
                      key={tab.name}
                      tab={tab} 
                      handleClick={() => {}}
                    />
                  ))}
                </div>

              </div>


            </motion.div>
            <motion.div className='absolute z-10 top-5 right-5' 
            {...fadeAnimation}
            >
              {/* now utilize or create the custombutton components */}
              <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true }
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              /> 

                                      {/* handleclick is going to be callback fxn, state.into(homepage ma ja go back thichni btke, ((homepage ma jana cahanxa))) */}

            </motion.div>
            {/* mathi ko motion div vanda tala gayera ani arko motion.div banauni */}
            {/* mathi patti slide garde vanera:  copied from edittabs and changed to ftltab */}
            <motion.div  
              className='filtertabs-container'
              {...slideAnimation('up')}            
              >
                  {FilterTabs.map((tab)=>(
                    <Tabs
                      key={tab.name}
                      tab={tab} 
                      isFilterTab
                      isActiveTab=""
                      handleClick={() => {}}
                    />
                  ))}



            </motion.div>
          </>
        )}
    </AnimatePresence>
  )
}

export default Customizer