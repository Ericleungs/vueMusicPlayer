import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import discovery from '@/components/discovery'
import playlist from '@/components/playlist'
import songs from '@/components/songs'
import mvs from '@/components/mvs'
import result from '@/components/result'

Vue.use(Router)

const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to){
  return VueRouterPush.call(this, to).catch(err => err);
}

export default new Router({
  routes: [
    {
      path: '/discovery',
      name: 'discovery',
      component: discovery,
      meta:{
        title: '音乐播放器 - 发现音乐'
      }
    },
    {
      path: '/',
      name: 'index',
      redirect: '/discovery'
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: playlist
    },
    {
      path: '/songs',
      name: 'songs',
      components: songs
    },
    {
      path: '/mvs',
      name: 'mvs',
      component: mvs
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
});
