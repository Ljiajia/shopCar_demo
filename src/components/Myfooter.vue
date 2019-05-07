<template>
    <footer>
        <router-link to="/index">首页</router-link>
        <router-link to="/type">分类</router-link>
        <router-link to="/shopcar">
        <span v-if="sumcount">{{sumcount}}</span>
        购物车</router-link>
        <router-link to="/my">我的</router-link> 
    </footer>
</template>
<script>
export default {
    props:['sumcount'],
    data(){
        return { 
        }
    } 
}
</script>
<style lang="scss" scoped>
footer{
    position: relative;
}
    span{
        position: absolute;
        left:63%;
        top: -20px;
        background: orange;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        line-height: 35px;
        text-align: center;
        font-size: 16px;
    }
</style>
