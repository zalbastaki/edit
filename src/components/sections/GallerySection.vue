<template>
    <section id="gallery">
        <h2 class="subheading">
            Gallery
        </h2>

        <div class="gallery-grid">
            <div
                v-for="(image, index) in data.images"
                :key="index"
                class="grid-item"
            >
                <img :src="image" :alt="index" />
            </div>
        </div>

        <div class="call-to-action">
            <a
                href="gallery.html"
                aria-labelledby="Link to Gallery page"
                class="btn btn-fill"
            >
                View Gallery
            </a>
        </div>
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

        .call-to-action {
            margin-top: 50px;
        }
    }

    /* GALLERY GRID */
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }

    .grid-item {
        background-color: #e1e1e1;

        img {
            width: 20vw;
            height: 20vw;
            object-fit: cover;
        }
    }
</style>
