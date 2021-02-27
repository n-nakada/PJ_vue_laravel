<template>
    <v-app>
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
                    <h1 class="display-1">login</h1>
                </v-card-title>
            </v-img>
            <v-card-text>
                <v-form>
                    <v-text-field
                        label="user"
                        prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
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
                        >
                            <v-icon left>mdi-login</v-icon>
                            login
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        showPassword: false
    }),
    props: {
        source: String
    },
    methods: {
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
