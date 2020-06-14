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

        <div class="call-to-action">
            <a
                href="events.html"
                aria-labelledby="Link to Events page"
                class="btn btn-fill"
            >
                More Events
            </a>
        </div>
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
        padding-left: $side-space;
        padding-right: $nav-side-space;
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

        .call-to-action {
            margin-top: 50px;
            display: flex;
            justify-content: center;
        }
    }
</style>
