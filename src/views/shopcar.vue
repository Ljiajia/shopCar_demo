<template>
    <div class="wrap">
        <header></header>
        <main>
            <ul>
                <li v-for="(val,i) in newlist" :key="val.id">
                    <b :class="{cur:val.open}" @click="onecheck(i)">v</b>
                    <dl>
                        <dt>
                            <img :src="require('../img/'+val.img)" alt="">
                        </dt>
                        <dd>
                            <div>
                                <h3>{{val.title}}</h3>
                                
                                <span>￥{{val.price}}</span> 
                                <div>
                                    <span @click="reduce(i)">-</span>
                                    <b>{{val.count}}</b>
                                    <span @click="add(i)">+</span>
                                </div> 
                            </div>
                        </dd>
                    </dl>
                </li>
                <div v-if="newlist.length>0">
                    <b :class="{cur:allcheck}" @click="allchecked">v</b> 全选  
                    <span>共计￥    <b v-if="summoney">{{summoney}}</b> </span>
                </div>
            </ul>
        </main>
        <Myfooter :sumcount='sumcount'></Myfooter>
    </div>
</template>
<script>
export default {
    props:['sumcount','newData'],
    data(){
        return {
            summoney:0,
            newlist:[],
            allcheck:false
        }
    },  
    created() { 
        this.newlist=this.newData;
           this.newlist.forEach(item=>{
            this.$set(item,"open",false) 
        })
    },
    methods: { 
        add(i){  
            this.newlist[i].count++; 
            this.allMoney();
            this.changeCount(i)
        },
        reduce(i){
            this.newlist[i].count--;
            if(this.newlist[i].count<=1){
                this.newlist[i].count=1
            } 
            this.allMoney()
        }, 
        onecheck(i){ //单选
            this.newlist[i].open=!this.newlist[i].open; 
            let flag= this.newlist.every(item=>item.open); 
            this.allcheck = flag ? true : false;
            this.allMoney() 
        },
        allchecked(){//多选
            this.allcheck=!this.allcheck;
            if(this.allcheck){
                this.newlist.forEach(item=>{
                    item.open=true
                })
            }else{
                this.newlist.forEach(item=>{
                    item.open=false
                })
            }
            this.allMoney() 
        },
        allMoney(){//总价  
            let money=0;
            this.newlist.forEach(item=>{
                if(item.open){
                money+=item.price*item.count
                }
            }); 
            this.summoney=money;
        },
        changeCount(i){ 
            this.$bus.$emit("addcar",this.newlist[i],'shopcar')
        }
    },
}
</script>
<style lang="scss" scoped>
    ul{
        width: 100%;
        padding: 10px;
        li{
            height: 130px;
            display: flex;
            >b{
                width: 30px;
                height: 30px; 
                font-size: 30px;
                background: #ccc;
                border-radius: 50%;
                text-align: center;
                line-height: 30px;
                margin-top: 50px;
                font-weight: normal; 
            }
            >b.cur{
                background: orange;
            }
            dl{
                flex:1;
                height: 100%;
                display: flex;
                margin-left: 10px;
                dt{
                    width: 150px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dd{
                    flex: 1;
                    margin-left: 20px;
                    div{
                       
                        >h3{
                            line-height: 40px;
                        }
                        >span{
                            line-height: 30px;
                        }
                        >div{
                            line-height: 40px;
                            >span{
                                display: inline-block;
                                width: 30px;
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                                font-size: 20px;
                                background: orange;
                            }
                            >b{
                                width: 30px;
                                text-align: center;
                                display: inline-block;
                            }
                        }
                    }
                    
                }
            }
        }
        >div{
            line-height: 30px;
            >b{
                display: inline-block;
                width: 30px;
                height: 30px; 
                font-size: 30px;
                background: #ccc;
                border-radius: 50%;
                text-align: center;
                line-height: 30px;
                margin-top: 50px;
                font-weight: normal;

            }
            >b.cur{
                background: orange;
            }
            >span{
                margin-left: 10px;
            }
        }
    }
</style>
