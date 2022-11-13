<template>
  <van-nav-bar :title="title" :left-text="leftText" :left-arrow="leftArrow" />
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  leftText: {
    type: String
  },
  leftArrow: {
    type: Boolean
  }
})
</script>
<style scoped lang="less"></style>
