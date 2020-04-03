<template>
    <section id="contact" class="container">
        <div class="col-7">
            <div class="form-wrapper">
                <h2 class="subheading">
                    Contact Us
                </h2>

                <form
                    name="contact"
                    method="POST"
                    netlify-honeypot="bot-field"
                    netlify
                >
                    <p class="hidden">
                        <label
                            >Don’t fill this out if you're human:
                            <input name="bot-field"
                        /></label>
                    </p>

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

        <div class="col-5">
            <div class="social-links">
                <a
                    href="https://www.facebook.com/groups/sweyorkuk"
                    target="_blank"
                    aria-labelledby="Link to EDIT's facebook page"
                    class="social-link"
                >
                    <fa-icon
                        :icon="['fab', 'facebook-square']"
                        aria-label="facebook"
                        class="icon"
                    />
                    sweyorkuk
                </a>

                <a
                    href="mailto:edit@yusu.org?subject=Mail from the website"
                    aria-labelledby="Mail to EDIT's email address"
                    class="social-link"
                >
                    <fa-icon
                        :icon="['fas', 'envelope-square']"
                        aria-label="email"
                        class="icon"
                    />
                    edit@yusu.org
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'contact-section',
    };
</script>

<style lang="scss" scoped>
    #contact {
        align-items: center;
        height: calc(100vh - #{$footer-height});
        background: $secondary-bg-color;
        padding-left: $side-space;
        padding-right: $nav-side-space;
    }

    @media only screen and (max-width: 1080px) {
        #contact {
            padding-right: $nav-side-space-tablet;
        }
    }

    #contact div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* FORM */
    #contact .form-wrapper {
        height: 80%;
        border-right: 2px solid $primary-color;
        padding-right: $side-space;
    }

    #contact .form-wrapper .subheading {
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    #contact input {
        display: block;
        width: 100%;
        height: 50px;
        background: none;
        border: none;
        border-bottom: 2px solid $primary-color;
    }

    #contact textarea {
        display: block;
        width: 100%;
        height: 150px;
        background: none;
        border: none;
        border-bottom: 2px solid $primary-color;
        resize: none;
    }

    #contact label {
        display: block;
        text-transform: uppercase;
        color: $primary-color;
        margin-top: 10px;
    }

    #contact form button {
        margin-top: 50px;
    }

    /* SOCIAL LINKS */
    #contact .social-links {
        padding-left: $side-space;
    }

    #contact .social-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: $primary-color;
        font-size: 20px;
    }

    #contact .social-link:not(:last-of-type) {
        margin-bottom: 20px;
    }

    #contact .social-link .icon {
        font-size: 80px;
        background: -webkit-linear-gradient(
            45deg,
            $secondary-color 0%,
            $primary-color 50%,
            $tertiary-color 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-right: 10px;
    }

    @media only screen and (max-width: 1080px) {
        #contact .social-link .icon {
            font-size: 60px;
        }
    }
</style>
