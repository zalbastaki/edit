<template>
    <section id="contact" class="container" :class="$mq">
        <div :class="{ 'col-7': $mq !== 'mobile' }">
            <div class="form-wrapper">
                <h2 class="subheading">
                    {{ data.heading }}
                </h2>

                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <input type="text" name="name" id="name" />
                    <label for="name">Name</label>

                    <input type="email" name="email" id="email" />
                    <label for="email">Email</label>

                    <textarea name="message" id="message"></textarea>
                    <label for="message">Message</label>

                    <button type="submit" class="btn btn-fill">
                        Send
                    </button>
                </form>
            </div>
        </div>

        <div :class="{ 'col-5': $mq !== 'mobile' }">
            <div class="social-links">
                <a
                    :href="data.facebook.link"
                    target="_blank"
                    aria-labelledby="Link to EDIT's facebook page"
                    class="social-link"
                >
                    <fa-icon
                        :icon="['fab', 'facebook-square']"
                        aria-label="facebook"
                        class="icon"
                    />
                    {{ data.facebook.label }}
                </a>

                <a
                    :href="`mailto:${data.email}?subject=Mail from the website`"
                    aria-labelledby="Mail to EDIT's email address"
                    class="social-link"
                >
                    <fa-icon
                        :icon="['fas', 'envelope-square']"
                        aria-label="email"
                        class="icon"
                    />
                    {{ data.email }}
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/contact.md';

    export default {
        name: 'contact-section',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped>
    #contact {
        align-items: center;
        min-height: calc(100vh - #{$footer-height});
        background: $secondary-bg-color;
        padding: 0 $side-space;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* FORM */
        .form-wrapper {
            height: 80%;
            border-right: 2px solid $primary-color;
            padding-right: $side-space;

            .subheading {
                text-transform: uppercase;
                margin-bottom: 50px;
            }
        }

        input {
            display: block;
            width: 100%;
            background: none;
            border: none;
            border-bottom: 2px solid $primary-color;
            padding: 10px 0;

            &:not(:first-of-type) {
                margin-top: 20px;
            }
        }

        textarea {
            display: block;
            width: 100%;
            height: 130px;
            margin-top: 20px;
            background: none;
            border: none;
            border-bottom: 2px solid $primary-color;
            resize: none;
        }

        label {
            display: block;
            text-transform: uppercase;
            color: $primary-color;
            margin-top: 10px;
        }

        form button {
            margin-top: 50px;
        }

        /* SOCIAL LINKS */
        .social-links {
            padding-left: $side-space;
        }

        .social-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: $primary-color;
            font-size: 20px;

            &:not(:last-of-type) {
                margin-bottom: 20px;
            }

            .icon {
                font-size: 80px;
                margin-right: 10px;
            }
        }

        &.tablet {
            .social-link {
                .icon {
                    font-size: 60px;
                }
            }
        }

        &.mobile {
            padding: $side-space $side-space-mobile;

            div {
                width: 100%;
            }

            .form-wrapper {
                height: unset;
                border-right: 0;
                padding-right: 0;
                margin-bottom: 40px;

                .subheading {
                    margin-bottom: 20px;
                }
            }

            .social-links {
                padding-left: 0;
            }

            .social-link {
                font-size: 14px;

                &:not(:last-of-type) {
                    margin-bottom: 15px;
                }

                .icon {
                    font-size: 30px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
