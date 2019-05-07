<template>
    <dl v-if="list">
        <dt>
            <img :src="require('../img/'+list.img)" alt="">
        </dt>
        <dd>
            <h3>{{list.title}}</h3>
            <p>{{list.info}}</p>
            <p>￥<span>{{list.price}}</span> ￥<s>{{list.oldprice}}</s> <span class="add" @click="addcount(index)">+</span></p> 
        </dd>
    </dl>
</template>
<script>
export default {
    props:['list','index'],
    data(){
        return {
            count:0 
        }
    },
    created() { 
    },
    methods: {
        addcount(i){ 
           
            this.$bus.$emit('addcar',this.list) 
        }
    },
}
</script>