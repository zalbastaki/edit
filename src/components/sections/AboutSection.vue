<template>
    <section id="about" class="container" :class="$mq">
        <div class="image" :class="{ 'col-4': $mq !== 'mobile' }">
            <div class="img-wrapper">
                <div class="img-overlay" />
                <div
                    class="img"
                    :style="{ 'background-image': `url(${data.image})` }"
                />
            </div>
        </div>

        <div :class="{ 'col-8': $mq !== 'mobile' }">
            <div class="text-content">
                <h2 class="subheading">
                    {{ data.heading }}
                </h2>

                <h3 class="heading">
                    {{ data.subheading }}
                </h3>

                <div class="text" v-html="makeHtml(data.content)" />

                <a
                    href="#gallery"
                    aria-labelledby="Link to Gallery section"
                    class="btn btn-fill"
                >
                    Gallery
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/about.md';

    import showdown from 'showdown';

    export default {
        name: 'about-section',

        mixins: [dataLoader(data)],

        methods: {
            makeHtml(content) {
                const converter = new showdown.Converter();
                return converter.makeHtml(content);
            },
        },
    };
</script>

<style lang="scss" scoped>
    #about {
        padding-right: $side-space;

        .text-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: right;
            height: 100%;
            margin-left: $side-space;
        }

        .heading {
            font-size: 50px;
            margin-bottom: 50px;
        }

        .btn {
            margin-top: 100px;
        }

        .img-wrapper {
            height: 100%;
        }

        &.tablet {
            .heading {
                font-size: 40px;
            }
        }

        &.mobile {
            flex-direction: column-reverse;
            padding: 0;

            .image {
                width: 100%;
                height: 300px;
            }

            .text-content {
                margin: $side-space $side-space-mobile;
                align-items: flex-start;
                text-align: left;
            }

            .heading {
                font-size: 30px;
                margin-bottom: 20px;
            }

            .btn {
                margin-top: 30px;
            }
        }
    }
</style>
