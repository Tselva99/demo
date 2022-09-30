import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./block";

export default grapesjs.plugins.add("swiperComponent", (editor, opts = {}) => {
  let options = {
    label: "Swiper",
    name: "cswiper",
    category: "Custom",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
