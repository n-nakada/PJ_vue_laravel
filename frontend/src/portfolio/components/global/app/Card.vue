<template>
    <v-card
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </v-card>
</template>

<script>
export default {
    name: 'AppCard'
}
</script>

<style scoped>
.v-card >>> .v-card__title {
    line-height: 1rem;
}
.v-card >>> .text-h5 {
    font-size: 1.125rem!important;
    font-weight: 300;
    line-height: 1.4em;
}
</style>

