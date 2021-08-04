<template>
  <div id="gjs"></div>
</template>

<script>
export default {
  name: 'Admin',
  mounted() {
    this.$grapes({
      container: "#gjs"
    });
  },
}
</script>