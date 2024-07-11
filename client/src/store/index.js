import { proxy } from "valtio";
const state =  proxy({
    
    intro: true, // whether we are in the homepage or not
    color : '#EFBD48',
    isLogoTexture : true,// are we displaying the logo on the shirt
    isFullTexture: false,
    logoDecal: './threejs.png',// Store the logo picture
    fullDecal : './threejs.png',// store the dress png
});
export default state