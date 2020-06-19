<template>
    <nav id="home-nav" :class="$mq">
        <button class="open-btn" @click="open = !open">
            <fa-icon
                :icon="['fas', 'chevron-left']"
                aria-label="Open Menu"
                :class="{ open }"
            />
        </button>
        <ul :class="{ open }">
            <li
                v-for="(section, index) in sections"
                :key="index"
                class="nav-item"
            >
                <a
                    :href="`#${section.name}`"
                    :aria-labelledby="`Link to ${section.name} section`"
                    @click="open = false"
                >
                    <span class="nav-item-indicator">
                        <fa-icon
                            :icon="['fas', section.icon]"
                            :aria-label="section.name"
                        />
                    </span>
                    <span class="nav-item-label">
                        {{ section.name }}
                    </span>
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
                sections: [
                    { name: 'header', icon: 'home' },
                    { name: 'about', icon: 'id-card' },
                    { name: 'events', icon: 'calendar-alt' },
                    { name: 'gallery', icon: 'images' },
                    { name: 'contact', icon: 'paper-plane' },
                ],
                open: false,
            };
        },
    };
</script>

<style lang="scss" scoped>
    nav#home-nav {
        position: fixed;
        right: 0;
        top: 50vh;
        transform: translateY(-50%);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));

        .open-btn {
            border: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 35px;
            font-size: 25px;
            color: $primary-color;
            background: $primary-bg-color;
            cursor: pointer;

            &:hover {
                background: darken($primary-bg-color, 5%);
            }

            &:focus {
                outline: none;
            }

            .open {
                transform: rotate(180deg);
            }
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            background: $primary-bg-color;
            overflow: hidden;
            width: 0;
            height: 290px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: width 0.4s linear;

            &.open {
                width: 90px;
            }
        }

        .nav-item {
            position: relative;
            text-align: center;

            a {
                display: block;
                text-decoration: none;
                color: $primary-color;
            }

            &:not(:last-of-type) {
                a {
                    padding-bottom: 30px;
                }
            }
        }

        .nav-item-indicator {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            display: inline-block;
            font-size: 20px;
        }

        .nav-item-label {
            opacity: 0;
            text-transform: uppercase;
            transition: opacity 0.2s linear;
            font-size: 14px;
        }

        &.desktop {
            .nav-item {
                &:hover {
                    .nav-item-label {
                        opacity: 100%;
                    }

                    .nav-item-indicator {
                        display: none;
                    }
                }
            }
        }

        &.tablet,
        &.mobile {
            ul {
                height: 250px;

                &.open {
                    width: 50px;
                }
            }
        }
    }
</style>
