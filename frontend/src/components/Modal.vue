<template>
    <div class="modal-parent">
        <div class="backdrop" @click="toggleModal"></div>

        <div class="modal">
            <locale-selector />
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import LocaleSelector from '../components/LocaleSelector.vue';
export default {
    components: {
        LocaleSelector,
    },
    methods: {
        ...mapMutations(['toggleModal']),
    },
};
</script>

<style>
.modal-parent {
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 9;
}
.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    z-index: 10;
    align-items: center;
}
.modal {
    position: relative;
    width: 500px;
    height: 500px;
    background: #fff;
    z-index: 11;
    border-radius: 8px;
}
</style>
