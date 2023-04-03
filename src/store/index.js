import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD4A',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;