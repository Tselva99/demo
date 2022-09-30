import grapesjs from "grapesjs";
import "bootstrap/dist/css/bootstrap.css";
// import {BsCardText} from 'react-icons/bs'
  function table(editor){
    editor.BlockManager.add('my-second-block', {
      label: '<div><p class="text-center mt-5 text-success">Table</p></div>',
      content: '<div class=" my-tableblock">'+
    '<table class="border border-light bg-dark" style="width:100%" >'+
      '<tr>'+
        '<th>Company</th>'+
        '<th>Company</th>'+
        '<th>Company</th>'+
        '</tr>'+
        '<tr>'+
        '<td>Alfreds Futterkiste</td>'+
        '<td>Alfreds Futterkiste</td>'+
        '<td>Alfreds Futterkiste</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Alfreds Futterkiste</td>'+
        '<td>Alfreds Futterkiste</td>'+
        '<td>Alfreds Futterkiste</td>'+
        '</tr>'+
    '</table></div>',
    });
}

var editor = grapesjs.init({
    container : '#gjs',
    plugins: [table]
});

export default table;