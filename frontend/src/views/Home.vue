<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <p>Current Language:{{ lang }}</p>
        <p>
            C#; Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. Sözdizimi C-like
            (C benzeri) bir deneyim sunar. Microsoft tarafından geliştirilmiş olsa da ECMA ve ISO standartları altına
            alınmıştır.[2][3] C programlama dilinde bir tam sayı değişkeni 1 artırmak için değişkenden sonra "++" eki
            kullanılır. C++ dilinin adı, C diliyle Nesne Yönelimli Programlama yapabilme olanağı (C with Classes) için
            eklentiler sağladığı için "C++" şeklindedir. Benzer şekilde C++ diline yeni eklentiler yapılarak ((C++)++)
            bir adım daha da ileriye götürülmüş ve tamamen nesneye yönelik tasarlanmış C# dilinin isimlendirilmesinde, +
            karakterlerinin birbirlerine yakınlaşmış hali ve bir melodi anahtarı olan C# Major kullanılmıştır
        </p>
        <p>
            C# (pronounced "see sharp") is a computer programming language. It is developed by Microsoft. It was created
            to use all capacities of .NET platform. The first version was released in 2001. The most recent version is
            C# 8.0, which was released in September 2019. C# is a modern language. C#'s development team is led by
            Anders Hejlsberg, the creator of Delphi.
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
