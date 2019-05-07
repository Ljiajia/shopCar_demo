<template>
    <div class="wrap">
        <header></header>
        <main>
            分类
        </main>
        <Myfooter :sumcount='sumcount'></Myfooter>
    </div>
</template>
<script>
export default {
    props:['sumcount'],
}
</script>