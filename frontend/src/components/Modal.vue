<template>
    <div class="modal-parent">
        <div class="backdrop" @click="toggleModal"></div>

        <div class="modal"></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
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
    width: 500px;
    height: 500px;
    background: #fff;
    z-index: 11;
    border-radius: 8px;
}
</style>
