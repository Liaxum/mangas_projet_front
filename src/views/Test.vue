<template>
  <div>
    <h1> {{ test }} </h1>
  </div>
</template>
<script>
  export default {
    name: 'Test',
    created() {
      /* eslint-disable no-console */
      console.log(this.$t('test'))
    },
    data() {
      return {
        test: this.$t('test')
      }
    }
  }
</script>
