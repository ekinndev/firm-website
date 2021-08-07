<template>
    <div class="home">
        <HomeComponent />
        <p>{{ $t('message.cur-language-text') }}:{{ lang }}</p>
        <p>
            {{ $t('message.csharp-text') }}
        </p>
    </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/Home.vue';
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: {
        HomeComponent,
    },
    computed: {
        ...mapState(['lang']),
    },
};
</script>
