<template>
    <button class="user-info-btn" @click="toggleInfo">
        User Info
        <div class="user-info" v-if="showInfo">
            <div class="user-info-email">{{ user.email }}</div>
            <button @click="logout">Logout</button>
        </div>
    </button>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data: () => ({
        showInfo: false,
    }),
    computed: {
        ...mapState(['user']),
    },
    methods: {
        ...mapActions(['logout']),

        toggleInfo() {
            this.showInfo = !this.showInfo;
        },
    },
};
</script>

<style>
.user-info-btn {
    position: relative;
}

.user-info {
    background: #fff;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 20px;
    align-items: center;
    height: 100px;
    position: absolute;
    top: 1rem;
    left: 1;
}
</style>
