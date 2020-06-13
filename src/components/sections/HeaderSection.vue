<template>
    <header id="header" class="container">
        <div class="col-6">
            <div class="text-content">
                <h1 class="heading">
                    Equality and Diversity in Tech.
                </h1>

                <h3 class="subheading">
                    Together, we can change the narrative, we can rewrite our
                    story, we can give everyone a voice.
                </h3>

                <div class="call-to-action">
                    <a
                        href="#events"
                        aria-labelledby="Link to Events section"
                        class="btn btn-fill"
                    >
                        Events
                    </a>

                    <a
                        href="#contact"
                        aria-labelledby="Link to Contact Us section"
                        class="btn btn-outline"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="img-wrapper">
                <div class="img-overlay"></div>
                <div class="img"></div>
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
    }

    /* TEXT CONTENT */
    #header .text-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-right: $side-space;
    }

    #header .heading {
        font-size: 80px;
    }

    @media only screen and (max-width: 1080px) {
        #header .heading {
            font-size: 50px;
        }
    }

    #header .subheading {
        margin: 50px 0;
    }

    #header .call-to-action {
        display: flex;
        flex-wrap: wrap;
    }

    #header .call-to-action > *:not(:last-child) {
        margin: 0 20px 20px 0;
    }

    /* IMAGE */
    #header .img-wrapper {
        width: 100%;
        height: 100%;

        /* clip section */
        -webkit-clip-path: url(#woman-outline);
        clip-path: url(#woman-outline);
    }

    #header .img {
        background-image: url(../../assets/images/group-pic.jpeg);
    }
</style>
