// Importy
import nette from 'nette-forms';
import $ from 'jquery';
import Vue from 'vue';
import myComp from './components/MyComponent.vue';
import nLink from './components/NLink.vue';

import '../css/style.scss';

// Inject do globálního scopu
window.Nette = nette;
window.$ = $;

// Inicializace nette forms
nette.initOnLoad();

// Globálně zaregistruje NLink komponentu pro
// generování Nette odkazů uvnitř Vue komponent
Vue.component('n-link', nLink);

// Vytvoření Vue instance
new Vue({
    el: '#app',
    // Data aplikace
    data: function () {
        return {
            message: 'Hello world!'
        }
    },
    // Komponenty aplikace
    components: {
        'my-component': myComp
    }
});
