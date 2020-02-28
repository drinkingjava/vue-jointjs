import Vue from 'vue'
import App from '@/App'
import RappidPlugin from '@/plugins/rappid'
import './styles.css'

Vue.use(RappidPlugin)

new Vue({
	el: '#app',
	render: h => h(App)
})
