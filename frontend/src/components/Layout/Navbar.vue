<template>
    <nav class="navbar">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/contact" class="nav-item">Contact</router-link>
    </nav>
</template>

<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-item {
    padding: 1rem;
}
</style>
