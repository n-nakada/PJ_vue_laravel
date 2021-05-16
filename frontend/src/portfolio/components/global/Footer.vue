<template>
    <v-footer
        color="grey darken-3"
        dark
        app
        padless
        absolute
        v-show="display"
    >
        <v-row
            justify="center"
            no-gutters
        >
            <span>©</span>
            <span class="mx-1">{{ new Date().getFullYear() }}</span>
            <span class="pink--text text--lighten-3">Asset</span>
            <span class="light-blue--text">Loader</span>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'App',
    props: {
        display: {
            type: String,
            default: true,
            required: true
        }
    }
}
</script>


