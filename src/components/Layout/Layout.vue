<template>
    <div class="layout">
        <Modal v-if="showModal">
            <div class="form">
                <form @submit="onSubmit">
                    <form-input
                        :label="$t('message.name_field')"
                        name="name"
                        :value="name.value"
                        @input="onInput"
                        :error="name.errText"
                        :hasError="name.hasError"
                    />
                    <form-input
                        :label="$t('message.email_field')"
                        name="email"
                        :value="email.value"
                        @input="onInput"
                        :error="email.errText"
                        :hasError="email.hasError"
                    />
                    <form-input
                        :label="$t('message.password_field')"
                        type="password"
                        name="password"
                        :value="password.value"
                        :error="password.errText"
                        :hasError="password.hasError"
                        @input="onInput"
                    />
                    <button :disabled="loading">{{ $t('message.login_button_text') }}</button>
                </form>
            </div>
        </Modal>
        <div class="container">
            <Navbar />
            <div class="content">
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Modal from '../Modal.vue';
import FormInput from '../FormInput.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'Layout',
    components: {
        Navbar,
        Footer,
        Modal,
        FormInput,
    },
    computed: {
        ...mapState(['showModal', 'loading']),
    },
    methods: {
        ...mapActions(['login']),
        ...mapMutations(['toggleModal']),
        async onSubmit(e) {
            e.preventDefault();
            if (!this.name.value) {
                this.name.errText = this.$t('message.required-text');
                this.name.hasError = true;
            } else {
                this.name.errText = '';
                this.name.hasError = false;
            }

            if (!this.email.value.includes('@')) {
                this.email.errText = this.$t('message.valid-email-text');
                this.email.hasError = true;
            } else {
                this.email.errText = '';
                this.email.hasError = false;
            }
            if (this.password.value.length < 6) {
                this.password.errText = this.$t('message.6-characters-password-text');
                this.password.hasError = true;
            } else {
                this.password.errText = '';
                this.password.hasError = false;
            }

            if (this.name.hasError || this.email.hasError || this.password.hasError) return;

            await this.login({ name: this.name.value, email: this.email.value });

            this.name = { value: '', hasError: null, errText: '' };
            this.email = { value: '', hasError: null, errText: '' };
            this.password = { value: '', hasError: null, errText: '' };
            this.toggleModal();
        },
        onInput(e) {
            this[e.name].value = e.value;
        },
    },
    data() {
        return {
            name: { value: '', hasError: null, errText: '' },
            email: { value: '', hasError: null, errText: '' },
            password: { value: '', hasError: null, errText: '' },
        };
    },
};
</script>

<style>
.form {
    padding: 10px;
}
</style>
