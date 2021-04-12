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
                    v-model="user.userId"
                    label="user"
                    prepend-icon="mdi-account-circle"
                />
                <v-text-field
                    v-model="user.password"
                    :type="showPassword ? 'text' : 'password'"
                    label="pass"
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
            user: {}
        }
    },
    props: {
        source: String
    },
    created() {
        this.$store.dispatch('init')
    },
    methods: {
        doLogin() {
            axios.post('/api/login', {
                userId: this.user
            }).then(response => {
                this.$store.dispatch('auth', {
                    userId: response.data.account.userId,
                    userToken: response.data.token
                })
                if (this.$router.query) {
                    this.$router.push(this.$router.query.redirect)
                } else {
                    var url = new URL(window.location.href)
                    this.$router.push({ path: url.searchParams.get('redirect') })
                }
            })
        }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
