<template>
    <div class="layout">
        <Modal v-if="showModal" />
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
import { mapState } from 'vuex';

export default {
    name: 'Layout',
    components: {
        Navbar,
        Footer,
        Modal,
    },
    computed: {
        ...mapState(['showModal']),
    },
};
</script>

<style></style>
