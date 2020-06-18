<template>
    <footer class="footer">
        <p class="text">
            © {{ year }} Equality & Diversity in Tech Society
            <br />
            Designed and developed by Zain Albastaki
        </p>
    </footer>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'footer-bar',

        computed: {
            year() {
                return moment().format('YYYY');
            },
        },
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

        .text {
            font-size: 12px;
        }
    }
</style>
