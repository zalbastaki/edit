<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'default',
    };
</script>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }

    body {
        margin-top: -18px;
    }

    #app {
        font-family: $main-font;
    }
</style>
