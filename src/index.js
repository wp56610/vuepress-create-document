import Button from './lib/Button/index.js';
const components = [
  Button,
]

const install = function(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
}

export default {
    version: '1.0.0',
    install,
    Button
}