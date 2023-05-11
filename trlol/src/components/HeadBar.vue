<template>
    <div id="header">
        HeadBar
            <button @click="goBack">이전</button>
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