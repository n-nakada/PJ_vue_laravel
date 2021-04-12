<template>
    <div>
        <h3>welcome {{ $store.getters.UserId }}</h3>
        <p>{{ message }}</p>
        <div class="">
            <img alt="Vue logo" src="@/portfolio/assets/logo.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Next',
    components: {
    },
    data() {
        return {
            message: "this is next page."
        }
    }
}
</script>
