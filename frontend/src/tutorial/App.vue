<template>
  <v-app id="inspire">
    <div class="text-center">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>
          mdi-minus
        </v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="pink"
      >
        <v-icon dark>
          mdi-heart
        </v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        color="teal"
      >
        <v-icon dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="cyan"
      >
        <v-icon dark>
          mdi-pencil
        </v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="purple"
      >
        <v-icon dark>
          mdi-android
        </v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
    data: () => ({
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
