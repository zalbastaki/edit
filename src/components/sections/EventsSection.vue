<template>
    <section id="events">
        <h2 class="subheading">
            {{ data.heading }}
        </h2>

        <ul class="col-12">
            <event-card
                v-for="(event, index) in data.events"
                :key="index"
                :event="event"
            />
        </ul>
    </section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/events.md';

    import EventCard from '../EventCard';

    export default {
        name: 'events-section',

        mixins: [dataLoader(data)],

        components: {
            EventCard,
        },
    };
</script>

<style lang="scss" scoped>
    #home #events .subheading {
        margin-bottom: 50px;
    }

    #events {
        padding: $side-space $nav-side-space $side-space $side-space;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media only screen and (max-width: 1080px) {
            padding-right: $nav-side-space-tablet;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
    }
</style>
