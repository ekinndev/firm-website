<template>
    <div id="app">
        <layout>
            <router-view />
        </layout>
    </div>
</template>
<script>
import Layout from './components/Layout/Layout.vue';

export default {
    name: 'App',
    components: {
        Layout,
    },
};
</script>
<style lang="scss">
@import url('./styles/globals.scss');
</style>
