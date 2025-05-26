import { createApp } from 'vue'
import App from './App.vue'
import PlayerCard from './components/PlayerCard.vue'

const app = createApp(App)
app.component('player-card', PlayerCard)
app.mount('#app')