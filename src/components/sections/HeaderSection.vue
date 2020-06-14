<template>
    <header id="header" class="container">
        <div class="col-6">
            <div class="text-content">
                <h1 class="heading">
                    {{ data.heading }}
                </h1>

                <h3 class="subheading">
                    {{ data.subheading }}
                </h3>

                <div class="call-to-action">
                    <a
                        :href="data.button1.link"
                        :aria-labelledby="`Link to ${data.button1.label}`"
                        class="btn btn-fill"
                    >
                        {{ data.button1.label }}
                    </a>

                    <a
                        :href="data.button2.link"
                        :aria-labelledby="`Link to ${data.button2.label}`"
                        class="btn btn-outline"
                    >
                        {{ data.button2.label }}
                    </a>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="img-wrapper">
                <div class="img-overlay" />
                <div :style="{ 'background-image': `url(${data.image})` }" />
            </div>
        </div>
    </header>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/header.md';

    export default {
        name: 'header-section',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped>
    #header {
        padding-left: $side-space;
        height: 100vh;

        .text-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            margin-right: $side-space;
        }

        .heading {
            font-size: 80px;

            @media only screen and (max-width: 1080px) {
                font-size: 50px;
            }
        }

        .subheading {
            margin: 50px 0;
        }

        .call-to-action {
            display: flex;
            flex-wrap: wrap;

            *:not(:last-child) {
                margin: 0 20px 20px 0;
            }
        }

        /* IMAGE */
        .img-wrapper {
            width: 100%;
            height: 100%;

            /* clip section */
            -webkit-clip-path: url(#woman-outline);
            clip-path: url(#woman-outline);
        }
    }
</style>
