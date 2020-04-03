<template>
    <section id="events">
        <h2 class="subheading">
            Events
        </h2>

        <ul class="col-12">
            <li class="event-card">
                <div class="text-content col-9">
                    <h3 class="heading">
                        LGBTQ+ AI Poetry
                    </h3>

                    <p class="text">
                        We put poems by LGBTQ+ creators into a bot and this is
                        what happened...
                    </p>

                    <a
                        href="https://www.facebook.com/events/1476213912532109/"
                        target="_blank"
                        aria-labelledby="Link to external event page"
                        class="link"
                    >
                        Link to Facebook Event
                    </a>

                    <div class="details">
                        <div class="detail">
                            <fa-icon
                                :icon="['fas', 'clock']"
                                aria-label="time"
                                class="icon"
                            />
                            <p class="text">
                                2pm - 3:30pm
                            </p>
                        </div>

                        <div class="detail">
                            <fa-icon
                                :icon="['fas', 'map-marker-alt']"
                                aria-label="place"
                                class="icon"
                            />
                            <p class="text">
                                The Portal Bookshop
                            </p>
                        </div>
                    </div>
                </div>

                <div class="date img-wrapper col-3">
                    <p class="text">
                        <span class="day">08</span>
                        <br />
                        <span class="month">Feb</span>
                    </p>

                    <div class="img-overlay"></div>
                </div>
            </li>

            <li class="event-card">
                <div class="text-content col-9">
                    <h3 class="heading">
                        Give It A Go Session
                    </h3>

                    <p class="text">
                        A Beginner’s Coding Jam
                    </p>

                    <a
                        href="https://www.facebook.com/events/557349371789384/"
                        target="_blank"
                        aria-labelledby="Link to external event page"
                        class="link"
                    >
                        Link to Facebook Event
                    </a>

                    <div class="details">
                        <div class="detail">
                            <fa-icon
                                :icon="['fas', 'clock']"
                                aria-label="time"
                                class="icon"
                            />
                            <p class="text">
                                2pm - 5pm
                            </p>
                        </div>

                        <div class="detail">
                            <fa-icon
                                :icon="['fas', 'map-marker-alt']"
                                aria-label="place"
                                class="icon"
                            />
                            <p class="text">
                                SLB/004
                            </p>
                        </div>
                    </div>
                </div>

                <div class="date img-wrapper col-3">
                    <p class="text">
                        <span class="day">22</span>
                        <br />
                        <span class="month">Jan</span>
                    </p>

                    <div class="img-overlay"></div>
                </div>
            </li>
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
    export default {
        name: 'events-section',
    };
</script>

<style lang="scss" scoped>
    #events {
        padding-left: $side-space;
        padding-right: $nav-side-space;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media only screen and (max-width: 1080px) {
        #events {
            padding-right: $nav-side-space-tablet;
        }
    }

    #home #events .subheading {
        margin-bottom: 50px;
    }

    #events ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    #events .call-to-action {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }

    /* EVENT CARD */
    #events .event-card {
        --border-radius: 15px;

        display: flex;
        width: 100%;
        background: $secondary-bg-color;
        border-radius: var(--border-radius);
        -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
    }

    #events .event-card:nth-of-type(even) {
        flex-direction: row-reverse;
    }

    #events .event-card:not(:last-of-type) {
        margin-bottom: 40px;
    }

    /* EVENT CARD TEXT */
    #events .event-card .text-content {
        padding: 35px 40px;
    }

    #events .event-card .heading {
        margin: 0 0 20px;
        font-size: 30px;
    }

    #events .event-card .link {
        display: block;
        margin: 20px 0;
    }

    #events .event-card .detail {
        display: inline-flex;
        align-items: center;
    }

    #events .event-card .detail:not(:last-of-type) {
        margin-right: 15px;
    }

    #events .event-card .detail .icon {
        color: $primary-color;
        margin-right: 5px;
    }

    /* EVENT CARD DATE */
    #events .event-card .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    #events .event-card:nth-of-type(odd) .date .img-overlay {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

    #events .event-card:nth-of-type(even) .date .img-overlay {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }

    #events .event-card .date .text {
        z-index: 2;
        line-height: unset;
    }

    #events .event-card .date .day {
        font-size: 100px;
    }

    @media only screen and (max-width: 1080px) {
        #events .event-card .date .day {
            font-size: 80px;
        }
    }

    #events .event-card .date .month {
        text-transform: uppercase;
    }
</style>
