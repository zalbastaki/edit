import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faClock,
    faMapMarkerAlt,
    faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faClock);
    library.add(faMapMarkerAlt);
    library.add(faEnvelopeSquare);
    library.add(faFacebookSquare);

    Vue.component('fa-icon', FontAwesomeIcon);
};
