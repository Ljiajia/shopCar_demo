<template>
    <div class="wrap">
        <header>
            <h3>爱鲜蜂-30分钟掌上便利</h3>
        </header>
        <main>
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4109715124,101168126&fm=27&gp=0.jpg" alt="">
                </swiper-slide>
                 <swiper-slide>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1992085767,102835282&fm=27&gp=0.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg" alt="">
                </swiper-slide>
            </swiper>
            <h4 class="sale">本周特价</h4>
            <div class="dllist">
               <Mydllist v-for="(val,i) in list"
            :key="val.id"
            :index="i"
            :list="val"></Mydllist>  
            </div>
           
        </main>
        <Myfooter :sumcount='sumcount'></Myfooter>
    </div>
</template>
<script>

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'; 
export default {
    props:['sumcount'],
    data(){
        return {
            swiperOption: {
                autoplay:true,
                loop:true
            },
            list:[]
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    created() {
        this.$ajax("/api/list").then(res=>{
           this.list=res.data
        })
    },
}
 
</script>
<style lang="scss">
    .swiper-container{
        width: 100%;
        height: 200px;
        .swiper-slide{
            width: 100%;
            height: 200px; 
            img{
                width: 100%;
               height: 100%;
            }
        }      
    }
    .sale{
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 10px; 
        font-size:20px; 
        text-align: center; 
    }
    .dllist{
        width: 100%;
        height: 180px;
        overflow-x: auto;
        display: flex;
        dl{
            width: 170px;
            height: 100%;
            flex-shrink: 0;
            margin: 0 10px;
            display: flex;
            flex-direction: column;
            dt{
                width: 100%;
                height: 100px;
                img{
                     width: 100%;
                      height: 100%;
                }
            }
            dd{
                width: 100%;
                flex: 1;
                h3{
                    line-height: 30px;
                }
                .add{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: orange;
                    font-size: 20px;
                    text-align: center;
                    line-height: 30px;
                    margin-left: 60px;
                }
            }
        }
    }
    
</style>