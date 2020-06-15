<template>
    <section id="gallery">
        <h2 class="subheading">
            Gallery
        </h2>

        <siema class="slider" :loop="true" :autoplay="true">
            <div v-for="(image, index) in data.images" :key="index">
                <img :src="image" />
            </div>
        </siema>
    </section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/gallery.md';

    export default {
        name: 'gallery-section',

        mixins: [dataLoader(data)],
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
    }

    .slider {
        width: 80vw;
        max-height: 80vh;

        img {
            width: 100%;
        }
    }
</style>
