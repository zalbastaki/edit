<template>
    <div id="home">
        <nav-bar />

        <header-section />
        <about-section />
        <events-section />
        <gallery-section />
        <contact-section />

        <footer-bar />
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/home.md';

    import NavBar from '../components/NavBar';
    import HeaderSection from '../components/sections/HeaderSection';
    import AboutSection from '../components/sections/AboutSection';
    import EventsSection from '../components/sections/EventsSection';
    import GallerySection from '../components/sections/GallerySection';
    import ContactSection from '../components/sections/ContactSection';
    import FooterBar from '../components/FooterBar';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],

        components: {
            NavBar,
            HeaderSection,
            AboutSection,
            EventsSection,
            GallerySection,
            ContactSection,
            FooterBar,
        },
    };
</script>

<style lang="scss" scoped>
    #home section {
        height: 100vh;
    }

    #home section:nth-of-type(odd) {
        background: $secondary-bg-color;
    }

    #home section:nth-of-type(even) {
        background: $primary-bg-color;
    }

    #home section .subheading {
        text-transform: uppercase;
        margin-bottom: 15px;
    }
</style>
