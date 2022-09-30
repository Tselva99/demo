import grapesjs from "grapesjs";
// import {BsCardText} from 'react-icons/bs'
  function myPlugin(editor){
    editor.BlockManager.add('my-first-block', {
      label: 'Simple block',
      content: '<div class="my-block"><input  classtype="password" /></div>',
    });
}

var editor = grapesjs.init({
    container : '#gjs',
    plugins: [myPlugin]
});

export default myPlugin;