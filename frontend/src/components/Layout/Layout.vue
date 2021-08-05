<template>
    <div class="layout">
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

export default {
    name: 'Layout',
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style></style>
