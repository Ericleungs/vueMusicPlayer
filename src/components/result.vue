<template>
    <div class="result-container">
        <div class="title-wrap">
            <h2 class="title" :keywords="(keywords = $route.query.q)">
                {{ $route.query.q }}
            </h2>
            <span class="sub-title">{{ count }}</span>
        </div>
        <el-tabs v-model="activeIndex">
            <el-tab-pane label="歌曲" name="songs">
                <table class="el-table">
                    <thead>
                        <th></th>
                        <th>音乐标题</th>
                        <th>歌手</th>
                        <th>专辑</th>
                        <th>时长</th>
                    </thead>
                    <tbody>
                        <tr class="el-table__row" v-for="(item, index) in songs" :key="index" @click="playMusci(item.id)"></tr>
                        <td>{{ index + 1 }}</td>
                        <td>
                            <div class="song-wrap">
                                <div class="name-wrap">
                                    <!--
                                        name
                                        mv icon
                                    -->
                                    <span>{{ item.name }}</span>
                                    <span v-if="item.mvid !== 0">MV</span>
                                </div>
                                <!--
                                    Subtitle here
                                -->
                                <span v-if="item.alias.length !== 0">{{ item.alias[0]}}</span>
                            </div>
                        </td>
                        <td>{{ item.artists[0].name }}</td>
                        <td>{{ item.album.name }}</td>
                        <td>{{ item.duration | playTimeFormat }}</td>
                    </tbody>
                </table>
            </el-tab-pane>

            <!--
                songs list
            -->
            <el-tab-pane label="歌单" name="lists">
                <div class="items">
                    <div class="item" v-for="(item, index) in playlists" :key="index" @click="toPlaylist(item.id)">
                        <div class="img-wrap">
                            <div class="num-wrap">
                                播放量:
                                <span class="num">{{ item.playCount | playNumFormat }}</span>
                            </div>
                            <img :src="item.coverImgUrl+'?param=200y200'" alt="" />
                            <span class="iconfont icon-play"></span>
                        </div>
                        <p class="name">{{ item.name }}</p>
                </div>
                </div>
            </el-tab-pane>
            <!--
                mv list
            -->
            <el-tab-pane label="MV" name="mv">
                <div class="items mv">
                    <div class="item" v-for="(item, index) in mvs" :key="index" @click="toMv(item.id)">
                        <div class="img-wrap">
                        <img :src="item.cover+'?param=250y150'" alt="" />
                        <span class="iconfont icon-play"></span>
                        <div class="num-wrap">
                            <div class="iconfont icon-play"></div>
                            <div class="num">{{ item.playCount | playNumFormat }}</div>
                        </div>
                        <span class="time">{{ item.duration | playTimeFormat }}</span>
                    </div>
                    <div class="info-wrap">
                        <div class="name">{{ item.name }}</div>
                        <div class="singer">{{ item.artistName }}</div>
                    </div>
                </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <!--
            dive in some pages
        -->
        <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="total" :current-page="pageNum" :page-size="pageSize">

        </el-pagination>

    </div>
</template>


<script>
export default{
   name: 'result',
   data(){
       return {
           // total count
           total: 0,
           // page index
           pageNum: 1,
           pageSize: 10,
           keywords: '',
           activeIndex: 'songs',
           songs: [],
           count: 0,
           playlists: [],
           mvs: [],
           songId: 0,
           type: 1
       }
   },
   created(){
       // this._search(),
   },
   watch: {
       keywords(){
           this._search();
       }
   }
}
</script>


<style scoped>

</style>