<template>
    <section id="about" class="container">
        <div class="col-4">
            <div class="img-wrapper">
                <div class="img-overlay" />
                <div :style="{ 'background-image': `url(${data.image})` }" />
            </div>
        </div>

        <div class="col-8">
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
        padding-right: $nav-side-space;

        @media only screen and (max-width: 1080px) {
            padding-right: $nav-side-space-tablet;
        }

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

            @media only screen and (max-width: 1080px) {
                font-size: 40px;
            }
        }

        .btn {
            margin-top: 100px;
        }

        /* IMAGE */
        .img-wrapper {
            height: 100%;
        }
    }
</style>
