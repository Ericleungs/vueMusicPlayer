<template>
    <div class="index-container">
        <!--
            navigate bar here
        -->
        <div class="nav">
            <ul>
                <li>
                    <router-link to='/discovery'>
                        <!--
                            Recommend to use iconfont
                        -->
                        <span>发现音乐</span>
                    </router-link>
                </li>
                <li>
                    <router-link to='/playlist'>
                        <!--
                            Recommend to use iconfont
                        -->
                        <span>推荐歌单</span>
                    </router-link>
                </li>
                <li>
                    <router-link to='/songs'>
                        <!--
                            Recommend to use iconfont
                        -->
                        <span>最新音乐</span>
                    </router-link>
                </li>
                <li>
                    <router-link to='/mvs'>
                        <!--
                            Recommend to use iconfont
                        -->
                        <span>最新MV</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--
            main area
        -->
        <div class="main">
            <router-view></router-view>
        </div>
        <!--
            player tag
        -->
        <div class="player">
            <audio src="musicUrl" controls id="music"></audio>
        </div>
    </div>
</template>


<script>
export default{
    name: 'index',
    data(){
        return {
            musicUrl: ''
        }
    },
    mounted(){
        // subscribe message
        // source file here is to pause autoplay songs
        /*
        this.$pubSub.subscribe('pauseAudio', msg=>{
            // CAUTIOUS HERE
            var audio = document.getElementById('music');
            audio.pause();
        });
        */
    }
}
</script>


<style scoped>

</style>