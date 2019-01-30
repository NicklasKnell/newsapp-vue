<template>
  <div v-if="author || releaseDate" class="metadata">
    <div v-if="author" class="fieldWithIcon">
      <i class="material-icons">person_outline</i>
      <span>{{author}}</span>
    </div>
    <span v-if="author && releaseDate" class="separator">|</span>
    <div v-if="releaseDate" class="fieldWithIcon">
      <i class="material-icons">date_range</i>
      <span>{{releaseDate}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    releaseDate: String
  }
};
</script>

<style lang="scss" scoped>
.metadata {
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
}

.fieldWithIcon {
  display: inline-flex;
  align-items: center;

  i {
    padding-right: 5px;
  }
}

.separator {
  width: 20px;
  text-align: center;
}
</style>
        