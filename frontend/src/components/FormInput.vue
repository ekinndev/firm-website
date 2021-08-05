<template>
    <div class="form-input">
        <label class="form-input-label" :class="{ invalid: error }">{{ label }}: </label>
        <input
            type="text"
            class="input-text"
            :name="name"
            :id="name"
            :value="defaultValue"
            :class="{ invalid: error }"
        />
        <div class="error-text" v-if="error">{{ error }}</div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, defaultValue: '' },
        label: { type: String, defaultValue: '' },
        defaultValue: { type: String, defaultValue: '' },
        type: { type: String, defaultValue: 'text' },
        error: { type: String, defaultValue: 'text' },
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
.error-text {
    padding: 0;
    margin: 0;
    color: red;
}
.form-input-label {
    display: block;
}
</style>
