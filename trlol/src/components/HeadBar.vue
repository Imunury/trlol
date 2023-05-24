<template>
    <div id="header">
        <button @click="goBack"><img src="../assets/img/pre_arrow.png"></button>
        <h1>TRLOL</h1>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>


<style>
@import "../css/HeadBar.css";
</style>