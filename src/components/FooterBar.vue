<template>
    <footer class="footer">
        <p class="text" :class="$mq">
            © {{ year }} Equality & Diversity in Tech Society
            <br />
            Designed and developed by
            <a
                href="https://www.linkedin.com/in/zalbastaki/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Zain Albastaki
            </a>
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

            a {
                color: $primary-color;
            }

            &.mobile {
                font-size: 10px;
            }
        }
    }
</style>
