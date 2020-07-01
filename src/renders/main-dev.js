import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PubSub from 'pubsub-js';


import '../assets/index.css';
import 'element-ui/lib/theme-chalk/index.css';


// audio time-span format
Vue.filter('playTimeFormat', function(originVal){
    let duration = originVal;
    let min = parseInt(duration / 1000 / 60);
    if (min < 10){
        min = '0' + min;
    }
    let sec = parseInt((duration / 1000) % 60);
    if (sec < 10){
        sec = '0' + sec;
    }
    return `${min}: ${sec}`;
})


// play count format
Vue.filter('playNumFormat', function(playCount){
    if(playCount > 10000){
        return parseInt(playCount / 1000) + 'k';
    }
    return playCount;
})


Vue.filter('dateFormat', function(originVal){
    const dt = new Date(originVal);
    const y = dt.getFullYear();
    // Months counts from 0 to 11 [0 ~ 11]
    // need to add additional 1 and change it into [1 ~ 12]
    const m = (dt.getMonth() + 1 + '').padStart(2, '0');
    const d = (dt.getDate() + '').padStart(2, '0');

    const hh = (dt.getHours() + '').padStart(2, '0');
    const mm = (dt.getMinutes() + '').padStart(2, '0');
    const ss = (dt.getSeconds() + '').padStart(2, '0');

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

Vue.prototype.$pubSub = PubSub;
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');