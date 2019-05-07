<template>
  <div id="app"> 
    <router-view :newData="newData" :sumcount="sumcount"></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            newData:[],
            sumcount:0
        }
    },
    created() {
        this.$bus.$on('addcar',(obj,n)=>{    
            // console.log(obj,n)
            let ind=this.newData.find((item)=>item.id==obj.id); //判断当前数组内是否有同类产品 
            if(ind){ 
                ind.count++;//如果有同类，加count
            }else{
                this.newData.push({count:1,...obj});  //否则把值放到一个新的数组里，并且加上count属性
            }
            this.sumcount=this.newData.reduce((p,n)=>p+n.count,0);//求总数量  
        })
    }, 
}
</script> 
<style lang="scss">
  *{  
      margin:0;
      padding:0;
      list-style:none;
      box-sizing: border-box;
    }  
    html,body,#app,.wrap{
        width: 100%;
        height: 100%;
    }
    .wrap{
        display: flex;
        flex-direction: column;
        header{
            width: 100%;
            height: 50px;
            background: pink;
            line-height: 50px;
            h3{
                width: 100%;
                text-align: center;
            }
        }
        main{
            flex: 1;
            overflow: auto;
        }
        footer{
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: flex;
            background: #ccc;
            >a{
                flex: 1;
                text-align: center;
                font-size: 16px;
                text-decoration: none;
                color: #000;
            }
        }
    } 
</style>
