import './global.css';
import App from './App.svelte';
import smoothScroll from 'smooth-scroll';

new smoothScroll('a[href*="#"]');

const app = new App({
  target: document.body,
});

export default app;
