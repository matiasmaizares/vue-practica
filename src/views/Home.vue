<template>
  <h1>Home</h1>
  <button @click="goToDayBook" class="btn btn-primary">Primary</button>
</template>


<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>