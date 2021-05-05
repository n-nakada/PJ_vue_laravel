<template>
    <div class="home" style="text-align: center">
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
        <ErrorDialog
            :dialog="errorDialog"
            :messages="dialogMessages"
            @result="errorDialogResponse"
        />
        <ConfirmDialog
            :dialog="confirmDialog"
            :messages="dialogMessages"
            @result="confirmDialogResponse"
        />
    </div>
</template>

<script>
import axios from "axios"
import HelloWorld from "@/portfolio/components/HelloWorld.vue"
import ErrorDialog from "@/portfolio/components/global/ErrorDialog"
import ConfirmDialog from "@/portfolio/components/global/ConfirmDialog"

export default {
    name: 'Home',
    components: {
        HelloWorld,
        ErrorDialog,
        ConfirmDialog
    },
    data() {
        return {
            user: this.$store.getters.UserId,
            message: 'ダッシュボード画面に要改良',
            dialogMessages: '',
            errorDialog: false,
            confirmDialog: false,
        }
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
                this.dialogMessages = 'ログアウトしました。'
                this.confirmDialog = true
            }).catch((e) => {
                this.$store.dispatch('init')
                this.dialogMessages = 'エラーが発生しました。'
                this.errorDialog = true
            })
        },
        errorDialogResponse() {
            this.errorDialog = false
            this.$router.push({ path: '/portfolio' })
        },
        confirmDialogResponse() {
            this.confirmDialog = false
            this.$router.push({ path: '/portfolio' })
        }
    }
}
</script>

