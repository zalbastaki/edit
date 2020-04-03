<template>
    <section id="gallery">
        <h2 class="subheading">
            Gallery
        </h2>

        <div class="gallery-grid">
            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
            </div>

            <div class="grid-item">
                <img src="@/assets/images/group-pic.jpeg" alt="Group picture" />
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
    export default {
        name: 'gallery-section',
    };
</script>

<style lang="scss" scoped>
    #gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #home #gallery .subheading {
        margin-bottom: 50px;
    }

    #gallery .call-to-action {
        margin-top: 50px;
    }

    /* GALLERY GRID */
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }

    .grid-item {
        background-color: #e1e1e1;
    }

    .grid-item img {
        width: 20vw;
        height: 20vw;
        object-fit: cover;
    }
</style>
