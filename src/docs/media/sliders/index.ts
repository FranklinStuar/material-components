import Component from 'vue-class-component';

import mdSlider from '../../../components/slider';
import mdSlide from '../../../components/slide';

@Component({
    components: {
        mdSlider,
        mdSlide
    },
    template: require('./sliders.html')
})
export default class Slides {
}

