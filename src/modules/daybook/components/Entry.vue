<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- TITULO -->
    <div class="entry-list d-fle">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quas
      magni quibusdam quae animi at magnam, saepe blanditiis vel, necessitatibus
      neque ducimus veritatis culpa. Minus eligendi ipsam odit error dolor.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-block: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
}
.entry-description {
  font-size: 12px;
}
</style>