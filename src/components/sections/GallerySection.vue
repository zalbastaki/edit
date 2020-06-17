<template>
    <section id="gallery">
        <h2 class="subheading">
            Gallery
        </h2>

        <siema ref="siema" class="slider" :loop="true" :autoplay="true">
            <div v-for="(image, index) in data.images" :key="index">
                <img :src="image" />
            </div>
        </siema>

        <div class="btn-container">
            <a class="btn btn-fill" @click="prev">Prev</a>
            <a class="btn btn-fill" @click="next">Next</a>
        </div>
    </section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/gallery.md';

    export default {
        name: 'gallery-section',

        mixins: [dataLoader(data)],

        methods: {
            prev() {
                this.$refs.siema.prev();
            },

            next() {
                this.$refs.siema.next();
            },
        },
    };
</script>

<style lang="scss" scoped>
    #home #gallery .subheading {
        margin-bottom: 50px;
    }

    #gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .slider {
            width: 80vw;
            max-width: 1200px;
            max-height: 70vh;

            img {
                width: 100%;
            }
        }

        .btn-container {
            margin-top: 20px;

            .btn {
                font-size: 14px;
                height: 30px;
                padding: 0 10px;
                min-width: 0px;

                &:not(:last-of-type) {
                    margin-right: 10px;
                }
            }
        }
    }
</style>
