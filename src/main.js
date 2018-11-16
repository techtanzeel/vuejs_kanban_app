import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// import "uikit/dist/css/uikit.min.css";

var vm = new Vue({
	render: h => h(App)
}).$mount('#app');
