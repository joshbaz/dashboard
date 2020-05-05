<template>
  <v-card
    color="white"
    flat
    height="880px"
    tile
  >
    <v-toolbar dense>
      <v-avatar size="">
          <v-img src="https://ik.imagekit.io/ubbwf5dpo/Tlogo_3YZw3bB0Q.svg" ></v-img>
      </v-avatar>

      <div class="flex-grow-1"></div>

      <v-btn class="button">
        <v-text>Go to Website</v-text>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.button {
    border: 1px solid red;
    background: white;
    color: red;
    border-radius: 12px;
}
</style>