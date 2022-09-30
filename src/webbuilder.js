import { useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import table from "./plugins/table/table";
import Swiper from "./plugins/swiper/index";
import myPlugin from './plugins/myplugins';
// import npmPackage from '@npm/package'
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs/dist/grapes.min.js';
import plugin from 'grapesjs-blocks-basic';
// impo
import newsletter from 'grapesjs-preset-newsletter';
//   import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.css';
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.js';
import gsjPresetWebpage from 'grapesjs-preset-webpage';

function WebBuilder() {
const [editor, setEditor] = useState(null);

 useEffect(() => {
  
  const editor = grapesjs.init(
    {
     container: '#gjs',
     height: '700px',
     width: '100%',
     plugins: [gsjPresetWebpage,plugin,table,myPlugin,Swiper],
     
    
   }
   )
   setEditor(editor);
 },[])

 return (
   <div id="gjs"></div>
 );
}
export default WebBuilder;