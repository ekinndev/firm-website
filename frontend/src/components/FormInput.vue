<template>
    <div class="form-input">
        <label class="form-input-label" :class="{ invalid: error, valid: hasError === false }">{{ label }}: </label>
        <input
            :type="type"
            class="input-text"
            :name="name"
            :id="name"
            :value="value"
            @input="emitValue"
            :class="{ invalid: error, valid: hasError === false }"
        />
        <div class="error-text" v-if="error">{{ error }}</div>
    </div>
</template>

<script>
export default {
    props: {
        value: { type: String, defaultValue: '' },
        name: { type: String, defaultValue: '' },
        label: { type: String, defaultValue: '' },
        hasError: { type: Boolean, defaultValue: undefined },
        type: { type: String, defaultValue: 'text' },
        error: { type: String, defaultValue: 'text' },
    },
    methods: {
        emitValue(e) {
            this.$emit('input', { name: this.name, value: e.target.value });
        },
    },
};
</script>

<style>
.form-input {
    min-height: 70px;
}
.input-text {
    padding: 5px;
    outline: none;
}
.invalid {
    border-color: red;
    color: red;
}
.valid {
    border-color: green;
    color: green;
}
.error-text {
    padding: 0;
    margin: 0;
    color: red;
}
.form-input-label {
    display: block;
}
</style>
