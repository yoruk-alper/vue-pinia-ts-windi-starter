import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import router from './router/index';
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app');
