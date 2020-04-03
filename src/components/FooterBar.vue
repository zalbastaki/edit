<template>
    <footer class="footer">
        <p class="text">
            © 2020 Equality & Diversity in Tech Society
            <br />
            Designed and developed by Zain Albastaki
        </p>
    </footer>
</template>

<script>
    export default {
        name: 'footer',
    };
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: $footer-height;
        color: $primary-color;
    }

    .footer .text {
        font-size: 12px;
    }
</style>
