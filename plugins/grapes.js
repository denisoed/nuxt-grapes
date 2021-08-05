import grapes from 'grapesjs';
import 'grapesjs-blocks-bootstrap4';
import 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';

const defaultOptions = {
  plugins: ['gjs-preset-webpage', 'grapesjs-blocks-bootstrap4'],
  canvas: {
    styles: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    ],
    scripts: [
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
    ],
  }
};

export default ({ app }, inject) => { // eslint-disable-line
  inject('grapes', (options) => {
    return grapes.init({
      ...defaultOptions,
      ...options,
    });
  });
};
