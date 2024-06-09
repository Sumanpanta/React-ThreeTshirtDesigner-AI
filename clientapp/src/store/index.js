import { proxy } from "valtio";

const state = proxy({
    intro: true,       //are we currently in the homepage, or are we not
    color:'#ECB615',
    isLogoTexture: true,   //are we displaying logo on the shirt
    isFullTexture: false, //full design on the shirt
    logoDecal: './threejs.png',   //just for the initial load of the shirt before uploading other logo
    fullDecal: './threejs.png',   //initial full logo
    
});

export default state;










// use this as react-context:whatever you define here, can be utilize within 
// entire application, it is that simple.