<template lang="pug">
form.well(v-if='!adLoggedIn',@submit.stop.prevent="adlogin")
    h3 Ad Login
    hr
    .form-group
        label(for='adId') 아이디:
        input#adId.form-control(type='text', v-model="adId", placeholder='ad account')
    .form-group
        label(for='adPassword') 패스워드:
        input#adPassword.form-control(type='password', v-model="adPassword", placeholder='*********')
    p.text-danger(v-show='adDenied')
        strong Access denied!
    |
    button.btn.btn-primary(type="submit", :disabled="!adPassword")
        icon.fa-fw(name="sign-in-alt")
        |  로그인
</template>

<script>
import 'vue-awesome/icons/exclamation-triangle';
import 'vue-awesome/icons/sync-alt';
import 'vue-awesome/icons/sign-in-alt';
import 'vue-awesome/icons/key';

export default {
    name: 'app',

    data () {
        return {
            adId: '',
            adPassword: '',
            adLoggedIn: false,
            adDenied: false,
        }
    },

    // methods: {
    //     adlogin() {
    //         if (!this.adPassword) return;
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('POST', 'login');
    //     },
    // },
}

</script>

<style>
    .adlogin-input-box {
        background: #fafafa;
    }

</style>