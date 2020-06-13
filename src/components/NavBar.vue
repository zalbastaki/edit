<template>
    <nav id="home-nav">
        <ul>
            <li
                v-for="(section, index) in sections"
                :key="index"
                class="nav-item"
            >
                <a
                    :href="`#${section}`"
                    :aria-labelledby="`Link to ${section} section`"
                >
                    <span class="nav-item-indicator"></span>
                    <span class="nav-item-label">{{ section }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'nav-bar',

        data() {
            return {
                sections: ['header', 'about', 'events', 'gallery', 'contact'],
            };
        },
    };
</script>

<style lang="scss" scoped>
    nav#home-nav {
        position: fixed;
        right: 20px;
        top: 50vh;
        transform: translateY(-50%);
        z-index: 10;
    }

    nav#home-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    nav#home-nav .nav-item {
        position: relative;
        text-align: right;
    }

    nav#home-nav .nav-item:not(:last-of-type) {
        margin-bottom: 30px;
    }

    nav#home-nav .nav-item a {
        text-decoration: none;
    }

    nav#home-nav .nav-item-indicator {
        position: absolute;
        right: 0;
        display: inline-block;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        border: 2px solid $secondary-color;
    }

    nav#home-nav .nav-item-label {
        opacity: 0;
        color: $secondary-color;
        text-transform: uppercase;
        transition: opacity 0.2s linear;
        font-size: 14px;
    }

    /* When hovered over a nav item, show the label */
    nav#home-nav .nav-item:hover .nav-item-label {
        opacity: 100%;
    }

    /* When hovered over a nav item, hide the indicator */
    nav#home-nav .nav-item:hover .nav-item-indicator {
        display: none;
    }

    @media only screen and (max-width: 1080px) {
        /* Because there's no hover on tablet, always show text labels */
        nav#home-nav .nav-item-label {
            opacity: 100%;
        }

        /* When hovered over a nav item, hide the indicator */
        nav#home-nav .nav-item-indicator {
            display: none;
        }
    }
</style>
