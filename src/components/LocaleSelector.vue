<template>
    <button @click="changeLanguage" class="toggleLanguage">
        {{ lang === 'TR' ? 'EN' : 'TR' }}
    </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['lang']),
    },
    methods: {
        ...mapMutations(['changeLanguage']),
    },
};
</script>

<style>
.toggleLanguage {
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
}
</style>
