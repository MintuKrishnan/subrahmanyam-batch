import { hello } from './module2.js';

const sayHello = () => {
  console.log(hello);
  console.log(window.hello);
};

document.getElementById('click').addEventListener('click', () => {
  sayHello();
});
document.getElementById('window').addEventListener('click', () => {
  console.log('data changed');
});

window.hello = 'not clicked';
