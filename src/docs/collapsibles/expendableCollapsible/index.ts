import Component from 'vue-class-component';

import components from '../../../components';
import directives from '../../../directives';

@Component({
    components,
    directives,
    template: require('./expendableCollapsible.html')
})
export default class ExpendableCollapsible {
    data() {
        return {
            opened: ['one'],
            popout: false
        }
    }
}

