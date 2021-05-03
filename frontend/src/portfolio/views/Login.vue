<template>
    <v-card
        width="400px"
        class="mx-auto mt-5"
    >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title>
                <h1 class="display-1">Login</h1>
            </v-card-title>
        </v-img>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="account.email"
                    label="Email"
                    prepend-icon="mdi-account-circle"
                />
                <v-text-field
                    v-model="account.password"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                />
                <v-card-actions>
                    <v-btn
                        block
                        color="primary"
                        @click="doLogin"
                    >
                        <v-icon left>mdi-login</v-icon>
                       ログイン
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import axios from "axios"
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false,
            account: {}
        }
    },
    props: {
        source: String
    },
    methods: {
        doLogin() {
            axios.post('/api/login', {
                email: this.account.email,
                password: this.account.password
            }).then(response => {
                this.$store.dispatch('auth', {
                    token: response.data
                })
                if (this.$router.query) {
                    this.$router.push(this.$router.query.redirect)
                    return
                }
                var url = new URL(window.location.href)
                if (url.query) {
                    this.$router.push({ path: url.searchParams.get('redirect') })
                } else {
                    this.$router.push({ path: '/portfolio/home' })
                }
            })
        }
    }
}
</script>

<style>
</style>
