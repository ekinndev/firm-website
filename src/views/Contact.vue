<template>
    <div class="about">
        <h1>{{ $t('message.contact-page-text') }}</h1>
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
                    :label="$t('message.phone_number_field')"
                    name="phoneNumber"
                    :value="phoneNumber.value"
                    :error="phoneNumber.errText"
                    :hasError="phoneNumber.hasError"
                    @input="onInput"
                />
                <v-select :options="selectOptions" v-model="country.value" />
                <form-input
                    :label="$t('message.message_field')"
                    type="text"
                    name="message"
                    :value="message.value"
                    :error="message.errText"
                    :hasError="message.hasError"
                    @input="onInput"
                />
                <button>{{ $t('message.send_button_text') }}</button>
            </form>
        </div>
    </div>
</template>

<script>
import FormInput from '../components/FormInput.vue';

export default {
    components: {
        FormInput,
    },
    computed: {
        selectOptions() {
            return this.$t('message.countries');
        },
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault();
            if (!this.name.value) {
                this.name.errText = this.$t('message.required-text');
                this.name.hasError = true;
            } else {
                this.name.errText = '';
                this.name.hasError = false;
            }
            if (!this.phoneNumber.value) {
                this.phoneNumber.errText = this.$t('message.required-text');
                this.phoneNumber.hasError = true;
            } else if (!/^\d+$/.test(this.phoneNumber.value)) {
                this.phoneNumber.errText = this.$t('message.valid-phone-text');
                this.phoneNumber.hasError = true;
            } else {
                this.phoneNumber.errText = '';
                this.phoneNumber.hasError = false;
            }
            if (!this.message.value) {
                this.message.errText = this.$t('message.required-text');
                this.message.hasError = true;
            } else {
                this.message.errText = '';
                this.message.hasError = false;
            }

            if (!this.email.value.includes('@')) {
                this.email.errText = this.$t('message.valid-email-text');
                this.email.hasError = true;
            } else {
                this.email.errText = '';
                this.email.hasError = false;
            }

            if (this.name.hasError || this.email.hasError || this.phoneNumber.hasError || this.message.hasError) return;

            console.log({
                name: this.name.value,
                email: this.name.value,
                phoneNumber: this.phoneNumber.value,
                message: this.message.value,
                country: this.country.value,
            });
        },
        onInput(e) {
            this[e.name].value = e.value;
        },
    },
    data() {
        return {
            name: { value: '', hasError: null, errText: '' },
            email: { value: '', hasError: null, errText: '' },
            phoneNumber: { value: '', hasError: null, errText: '' },
            message: { value: '', hasError: null, errText: '' },
            country: { value: null, hasError: null, errText: '' },
        };
    },
};
</script>

<style lang="scss">
.about {
    min-height: 900px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;

    .form {
        width: 500px;
    }
}
</style>
