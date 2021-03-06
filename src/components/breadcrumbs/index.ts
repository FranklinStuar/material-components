import Component from 'vue-class-component';

import mdNavbar from '../navbar';

@Component({
    props: {
        list: {
            type: Object,
            required: false,
            'default': {}
        }
    },
    components: {
        mdNavbar
    },
    template: require('./breadcrumbs.html')
})
export default class Breadcrumbs {
}