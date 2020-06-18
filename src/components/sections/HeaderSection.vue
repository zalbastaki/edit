<template>
    <header id="header" class="container" :class="$mq">
        <div :class="{ 'col-6': $mq !== 'mobile' }">
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

        <div class="image" :class="{ 'col-6': $mq !== 'mobile' }">
            <div class="img-wrapper">
                <div class="img-overlay" />
                <div
                    class="img"
                    :style="{ 'background-image': `url(${data.image})` }"
                />
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
        min-height: 100vh;

        .text-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            margin-right: $side-space;
        }

        .heading {
            font-size: 80px;
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

        .img-wrapper {
            width: 100%;
            height: 100%;

            -webkit-clip-path: url(#woman-outline);
            clip-path: url(#woman-outline);
        }

        &.tablet {
            .heading {
                font-size: 50px;
            }
        }

        &.mobile {
            padding: 0;
            flex-direction: column-reverse;
            justify-content: flex-end;

            .image {
                width: 100%;
                height: 150px;

                .img-wrapper {
                    -webkit-clip-path: none;
                    clip-path: none;
                }
            }

            .text-content {
                margin: $side-space;
            }

            .heading {
                font-size: 30px;
            }

            .subheading {
                line-height: 30px;
                margin: 25px 0;
                font-size: 16px;
            }
        }
    }
</style>
