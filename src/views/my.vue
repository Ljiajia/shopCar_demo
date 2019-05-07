<template>
    <div class="wrap">
        <header></header>
        <main>
            我的
        </main>
        <Myfooter :sumcount='sumcount'></Myfooter>
    </div>
</template>
<script>
export default {
    props:['sumcount'],
}
</script>