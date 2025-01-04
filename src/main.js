import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue'; // Import the root component
import 'bootstrap'; // Import Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const app = createApp(App); // Create the Vue app with the App component
app.mount('#app'); // Mount the app to the DOM element with id "app"
