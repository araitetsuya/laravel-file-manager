import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';

import SampleComponent from './SampleComponent.vue';

const app = createApp({
    components: {SampleComponent}
});

app.mount('#app')
