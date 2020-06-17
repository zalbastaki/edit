<template>
    <li class="event-card">
        <div class="text-content col-9">
            <h3 class="heading">
                {{ event.name }}
            </h3>

            <p class="text">
                {{ event.description }}
            </p>

            <a
                :href="event.link.link"
                target="_blank"
                aria-labelledby="Link to external event page"
                class="link"
            >
                {{ event.link.label }}
            </a>

            <div class="details">
                <div class="detail">
                    <fa-icon
                        :icon="['fas', 'clock']"
                        aria-label="time"
                        class="icon"
                    />
                    <p class="text">
                        {{ time }}
                    </p>
                </div>

                <div class="detail">
                    <fa-icon
                        :icon="['fas', 'map-marker-alt']"
                        aria-label="place"
                        class="icon"
                    />
                    <a
                        v-if="event.location.link"
                        :href="event.location.link"
                        target="_blank"
                        aria-labelledby="Link to location"
                        class="link"
                    >
                        {{ event.location.name }}
                    </a>
                    <p v-else class="text">
                        {{ event.location.name }}
                    </p>
                </div>
            </div>
        </div>

        <div class="date img-wrapper col-3">
            <p class="text">
                <span class="day">{{ day }}</span>
                <br />
                <span class="month">{{ month }}</span>
            </p>

            <div class="img-overlay" />
        </div>
    </li>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'event-card',

        props: {
            event: {
                type: Object,
                required: true,
            },
        },

        computed: {
            start() {
                return this.event.datetime.start;
            },

            end() {
                return this.event.datetime.end;
            },

            time() {
                const start = moment(this.start).format('h:mm a');
                const end = moment(this.end).format('h:mm a');

                return `${start} - ${end}`;
            },

            day() {
                return moment(this.start).format('DD');
            },

            month() {
                return moment(this.start).format('MMM');
            },
        },
    };
</script>

<style lang="scss" scoped>
    .event-card {
        display: flex;
        width: 100%;
        background: $secondary-bg-color;
        box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);

        &:nth-of-type(even) {
            flex-direction: row-reverse;
        }

        &:not(:last-of-type) {
            margin-bottom: 40px;
        }

        .text-content {
            padding: 35px 40px;
        }

        .heading {
            margin: 0 0 20px;
            font-size: 30px;
        }

        .link {
            display: block;
            margin: 20px 0;
        }

        .detail {
            display: inline-flex;
            align-items: center;

            &:not(:last-of-type) {
                margin-right: 15px;
            }

            .icon {
                color: $primary-color;
                margin-right: 5px;
            }
        }

        .date {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            .text {
                z-index: 2;
                line-height: unset;
            }

            .day {
                font-size: 100px;

                @media only screen and (max-width: 1080px) {
                    font-size: 80px;
                }
            }

            .month {
                text-transform: uppercase;
            }
        }
    }
</style>
