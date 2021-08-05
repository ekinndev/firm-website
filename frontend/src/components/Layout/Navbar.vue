<script>
import { mapMutations, mapState } from 'vuex';

export default {
    methods: {
        ...mapMutations(['changeLanguage']),
        mobileMenu() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        },
    },
    computed: {
        ...mapState(['lang']),
    },
};
</script>
<template>
    <header class="header">
        <nav class="navbar">
            <a href="/" class="nav-logo">
                <div class="logo"></div>
            </a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <router-link to="/" class="nav-item">Home</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/contact" class="nav-item">Contact</router-link>
                </li>
            </ul>
            <div class="hamburger" @click="mobileMenu(this)">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        <button @click="changeLanguage" class="toggleLanguage">
            {{ lang === 'TR' ? 'EN' : 'TR' }}
        </button>
    </header>
</template>

<style lang="scss">
.logo {
    background: url('/logo.png') no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
}
.header {
    border-bottom: 1px solid #e2e8f0;
    position: relative;
}
.toggleLanguage {
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
}

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
    a {
        color: #333;
        text-decoration: none;
        &:hover {
            color: #482ff7;
        }
    }
}

.nav-link {
    font-size: 1.2rem;
    font-weight: 400;
    color: #475569;
}

.nav-link:hover {
    color: #482ff7;
}

.nav-logo {
    font-size: 2.1rem;
    font-weight: 500;
    color: #482ff7;
}

@media only screen and (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 5rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-item {
        margin: 2.5rem 0;
    }

    .hamburger {
        display: block;
        cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}
</style>
