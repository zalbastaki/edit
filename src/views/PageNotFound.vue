<template>
    <div id="page-not-found">
        <h1 class="subheading">Oops, page not found.</h1>
    </div>
</template>

<script>
    export default {
        name: 'page-not-found',
    };
</script>

<style lang="scss" scoped>
    #page-not-found {
        min-height: calc(100vh - #{$footer-height});
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
