<template>
    <div class="home my-5" style="text-align: center">
        <h3>welcome {{ user }}</h3>
        <p>{{ message }}</p>
        <div class="">
            <img alt="Vue logo" src="@/portfolio/assets/logo.png" />
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
        <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
            @click="next"
        >
            <v-icon dark>
                mdi-heart
            </v-icon>
        </v-btn>
        <v-btn
            class="mx-2"
            fab
            dark
            small
            color="indigo"
            @click="regist"
        >
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
    </div>
</template>

<script>
import HelloWorld from "@/portfolio/components/HelloWorld.vue"

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            user: this.$store.getters.UserId,
            message: 'ダッシュボード画面に要改良'
        }
    },
    methods: {
        next() {
            this.$router.push({ path: "/portfolio/next" })
        },
        regist() {
            this.$router.push({ path: "/portfolio/register" })
        }
    }
}
</script>

