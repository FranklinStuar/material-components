import Component from 'vue-class-component';

import components from '../../../components';

@Component({
    components,
    template: require('./input.html')
})
export default class InputFileds {

    data() {
        return {
            firstName: 'Martin',
            lastName: '',
            age: null,
            successMsg: 'Success',
            errorMsg: 'Error',
            firstNameValid: "null",
            lastNameValid: "null"
        }
    }

    bool(val) {
        if (val == 'true') {
            return true;
        }
        else if (val == 'false') {
            return false;
        }

        return null;
    }
}

