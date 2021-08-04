import grapes from 'grapesjs';
import 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';

const defaultOptions = {
  plugins: ["gjs-blocks-basic"]
};

export default ({ app }, inject) => { // eslint-disable-line
  inject('grapes', (options) => {
    return grapes.init({
      ...defaultOptions,
      ...options,
    });
  });
};
