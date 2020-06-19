<template>
    <section id="events" :class="$mq">
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
    #home #events {
        padding: $side-space;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .subheading {
            margin-bottom: 50px;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        &.mobile {
            padding: $side-space $side-space-mobile;

            .subheading {
                margin-bottom: 20px;
            }
        }
    }
</style>
