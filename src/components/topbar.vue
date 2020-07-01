<template>
    <div class="top-container">
        <div class="left-box">
            <!--
                左上角的两个button
                还有上面的搜索栏和搜索键
                -->
            <div class="icon-wrapper">
                <span class="iconfont icon-home" @click="toHomeClick"></span>
                <span class="iconfont icon-full-screen" @click="getFullScreen(btnStatus)"></span>
            </div>
        </div>
        <div class="right-box">
            <div class="el-input el-input--small el-input--prefix">
                <input type="text" autocomplete="on" placeholder="search"
                    v-model="inputVal" @keyup.enter="toResult" class="el-input__inner" />
                <span class="el-input__prefix">
                    <i class="el-inpupt__icon el-icon-search"></i>
                </span>
            </div>
            <!--
            <span class="el-input__prefix">
                <i class="el-input__icon el-icon-search"></i>
            </span>
            -->
        </div>
    </div>
</template>


<script>
export default{
    name: 'top',
    data(){
        return {
            query: '',
            inputVal: '',
            n: 0,
            btnStatus: 0
        }
    },
    methods:{
        toResult(){
            if (0 == this.inputVal.length){
                this.$message.warning("please search something");
            }
            else{
                this.$router.push(`/result?q=${this.inputVal}`);
            }
        },
        toHomeClick(){
            if('/discovery' === this.$route.path){
                return 
            }
            this.$router.push(`/discovery`);
        },

        getFullScreen(btnStatus){
            this.btnStatus = this.btnStatus === 0 ? 1 : 0;
            // if zero, give one
            this.n += 1;
            if(this.n % 2 ==0){
                this.n = this.outFullScreen(document);
            }
            else{
                this.n = this.inFullScreen(document.documentElement);
            }
        },
        inFullScreen(element){
            let el = element;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen || elm.mozRequestFullScreen || el.msRequestFullScreen
            if(typeof rfs != 'undefined' && rfs != null){
                rfs.call(el);
            }
            /*
            else if(typeof window.ActiveXObject != 'undefined'){
                let wscript = new ActiveXObject('WScript.shell');
                if (wscript != null){
                    wscript.SendKeys('{F11}');
                }
            }
            */
        },
        outFullScreen(element){
            let el = element;
            let cfs = el.cancelFullScreen || el.webkitCancelFullScreent || el.mozCancelFullScreen || el.exitFullScreen;
            if(typeof cfs != 'undefined' && cfs != null){
                cfs.call(el);
            }
            // unable on IE6
        }
    }
}
</script>


<style scoped>

</style>