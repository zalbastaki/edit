<template>
    <section id="about" class="container">
        <div class="col-4">
            <div class="img-wrapper">
                <div class="img-overlay"></div>
                <div class="img"></div>
            </div>
        </div>

        <div class="col-8">
            <div class="text-content">
                <h2 class="subheading">
                    About
                </h2>

                <h3 class="heading">
                    We're here for you
                </h3>

                <p class="text">
                    We are a University of York society, supporting equality and
                    diversity in technology
                    <br /><br />
                    We are dedicated to the furthering of women, and other
                    minority groups, in engineering, both at York and in the
                    outside world
                </p>

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

    export default {
        name: 'about-section',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped>
    #about {
        padding-right: $nav-side-space;
    }

    @media only screen and (max-width: 1080px) {
        #about {
            padding-right: $nav-side-space-tablet;
        }
    }

    /* CONTENT */
    #about .text-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        text-align: right;
        height: 100%;
        margin-left: $side-space;
    }

    #about .heading {
        font-size: 50px;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 1080px) {
        #about .heading {
            font-size: 40px;
        }
    }

    #about .btn {
        margin-top: 100px;
    }

    /* IMAGE */
    #about .img-wrapper {
        height: 100%;
    }

    #about .img {
        background-image: url(../../assets/images/group-pic.jpeg);
    }
</style>
