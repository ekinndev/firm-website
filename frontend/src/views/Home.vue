<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <p>{{ $t('message.cur-language-text') }}:{{ lang }}</p>
        <p>
            {{ $t('message.csharp-text') }}
        </p>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home.vue';
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    computed: {
        ...mapState(['lang']),
    },
};
</script>
