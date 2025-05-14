<template>
  <PostCardComments v-for="(data, index) in dataComment" :key="index" :item="data" />
</template>

<script setup lang="ts">
import { dataComment } from "../../components/PostCardComment/data/DataComment";
import PostCardComments from "@/components/PostCardComment/PostCardComments.vue";
</script>

<style scoped lang="scss">
@use "./style/history";
</style>
