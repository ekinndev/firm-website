<template>
    <div class="layout">
        <Modal v-if="showModal">
            <div class="form">
                <form @submit="onSubmit">
                    <form-input
                        label="name"
                        name="name"
                        :value="name.value"
                        @input="onInput"
                        :error="name.errText"
                        :hasError="name.hasError"
                    />
                    <form-input
                        label="email"
                        name="email"
                        :value="email.value"
                        @input="onInput"
                        :error="email.errText"
                        :hasError="email.hasError"
                    />
                    <form-input
                        label="password"
                        type="password"
                        name="password"
                        :value="password.value"
                        :error="password.errText"
                        :hasError="password.hasError"
                        @input="onInput"
                    />
                    <button :disabled="loading">Login</button>
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
import { mapState, mapActions } from 'vuex';

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
        async onSubmit(e) {
            e.preventDefault();
            if (!this.name.value) {
                this.name.errText = 'Required Field';
                this.name.hasError = true;
            } else {
                this.name.errText = '';
                this.name.hasError = false;
            }

            if (!this.email.value.includes('@')) {
                this.email.errText = 'Please enter an valid email';
                this.email.hasError = true;
            } else {
                this.email.errText = '';
                this.email.hasError = false;
            }
            if (this.password.value.length < 6) {
                this.password.errText = 'Please enter a password 6 characters or more';
                this.password.hasError = true;
            } else {
                this.password.errText = '';
                this.password.hasError = false;
            }

            if (this.name.hasError || this.email.hasError || this.password.hasError) return;

            await this.login({ name: this.name.value, email: this.email.value });
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

<style></style>
