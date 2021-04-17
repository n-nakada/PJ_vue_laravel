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
                <h1 class="display-1">アカウント登録</h1>
            </v-card-title>
        </v-img>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="account.name"
                    label="Name"
                    prepend-icon="mdi-account-circle"
                />
                <v-text-field
                    v-model="account.email"
                    label="E-Mail"
                    prepend-icon="mdi-email"
                />
                <v-text-field
                    v-model="account.password"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                />
                <v-text-field
                    v-model="account.confirm"
                    :type="showConfirm ? 'text' : 'password'"
                    label="Confirm Password"
                    prepend-icon="mdi-checkbox-marked-circle"
                    :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showConfirm = !showConfirm"
                />
                <v-card-actions>
                    <v-btn
                        block
                        color="primary"
                        @click="doRegist"
                    >
                        <v-icon left>mdi-database-plus</v-icon>
                        登録
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
//import axios from "axios"
export default {
    name: 'Register',
    data() {
        return {
            showPassword: false,
            showConfirm: false,
            account: {}
        }
    },
    methods: {
        doRegist() {
            console.log(this.account)
            console.log('regist!')
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

