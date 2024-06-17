import React,{useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import {download, logoShirt, stylishShirt} from '../assets';
import {downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import {fadeAnimation, slideAnimation} from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tabs  } from '../components';

const Customizer = () => {
  // we gonna check, are we on the homepage or in customizer, for that we use snapshot state,
  const snap = useSnapshot(state);

  // write here as the local state of our app, we can create use state, see doc(250)
  const [file, setFile] = useState('');

  //later we ganna create ai prompt so, useState for that too;
  const [prompt, setprompt] = useState('');

  //are we generating img or not for that too;
  const [generatingImg, setgeneratingImg] = useState(false);

  //active state
  const [activeEditorTab, setactiveEditorTab] = useState("");
  const [activeFilterTab, setactiveFilterTab] = useState({
    logoShirt:true,
    stylishShirt:false,
  })

  //show tab depending on the activeTab vanni ma new clickable fxn banauna tab.jsx ma kaam garesi click banauna,see docs(266), fp:(301)
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker/>
      case "filepicker":
        return <FilePicker
        
        file={file}
        setFile={setFile}
        readFile = {readFile} //readfile ko sabbai kaam sakkyo, aba pass grna milxa
        
        />
      case "aipicker":
        return <AIPicker/>
     
      default:
        return null;
    }
    
  }


  const handleDecals = (type, result ) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;
    
    if(!activeFilterTab[decalType.FilterTabs]){
      handleActiveFilterTab(decalType.filterTab)
    }

  }

  //mathi lekheko handleActiveFilterTab wala fxn xin , and we create it right away.
  const handleActiveFilterTab =(tabName) => {
    switch(tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];   //toggle it on/off
        break;
      case "stylishShirt":
        state.isFullTexture =!activeFilterTab[tabName];
      default:
        state.isFullTexture = true;
        state.isLogoTexture = false;
    }

  }

  const readFile = (type ) => {
    reader(file)
    .then((result) =>{
      handleDecals(type,result);
      setactiveEditorTab("");

    } )
  }

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
                      handleClick={() => setactiveEditorTab(tab.name)}
                    />
                  ))}`
                  {/* see docs (269)` */}
                  {generateTabContent()}
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