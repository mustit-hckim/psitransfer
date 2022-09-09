import Vue from 'vue';
import Login from './adLogin.vue'
import adstore from './adLogin/store.js'

new Vue({
    el: '#adUserLogin',
    data: {
        baseURI: document.head.getElementsByTagName('base')[0].href
    },
    adstore,
    render: h => h(Login)
});

window.PSITRANSFER_VERSION = PSITRANSFER_VERSION;