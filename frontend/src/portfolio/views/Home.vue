<template>
    <div>
        <h3>welcome {{ $store.getters.UserId }}</h3>
        <p>{{ message }}</p>
        <div class="">
            <img alt="Vue logo" src="@/portfolio/assets/logo.png">
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
        <v-btn
            class="mx-2"
            fab
            dark
            small
            color="teal"
            @click="logout"
        >
            <v-icon dark>
                mdi-logout
            </v-icon>
        </v-btn>
    </div>
</template>

<script>
import axios from "axios"
import HelloWorld from '@/portfolio/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            message: ""
        }
    },
    created() {
//        this.fetchHello()
    },
    methods: {
        next() {
            this.$router.push({ path: "/portfolio/next" })
        },
        regist() {
            this.$router.push({ path: "/portfolio/register" })
        },
        logout() {
            axios.post('/api/logout', {
                token: this.$store.getters.UserToken
            }).then(response => {
                this.$store.dispatch('init')
                this.$router.push({ path: '/portfolio' })
            })
        },
        fetchHello() {
            const uri = ""
            this.axios.get(uri).then(response => {
                this.message = response.data.message
            })
        }
    }
}
</script>

