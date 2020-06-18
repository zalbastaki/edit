import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChevronLeft,
    faHome,
    faIdCard,
    faCalendarAlt,
    faImages,
    faPaperPlane,
    faClock,
    faMapMarkerAlt,
    faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faChevronLeft);
    library.add(faHome);
    library.add(faIdCard);
    library.add(faCalendarAlt);
    library.add(faImages);
    library.add(faPaperPlane);
    library.add(faClock);
    library.add(faMapMarkerAlt);
    library.add(faEnvelopeSquare);
    library.add(faFacebookSquare);

    Vue.component('fa-icon', FontAwesomeIcon);
};
