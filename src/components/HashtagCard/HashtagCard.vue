<template>
    <div class="hashtag-card">
        <div class="hashtag-card__title">
            <img class="hashtag-card__title-icon" :src="item.hashtagIcon" />
            <h2 class="hashtag-card__title-text">{{ item.hashtagTitle }}</h2>
        </div>
        <div class="hashtag-card__posts">
            <p>{{ item.postCount?.length }} Posts</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { HashtagCardProps } from "./types/HashtagCard";
import { ref } from "vue";

const props = defineProps<{
    item: HashtagCardProps;
}>();

const item = ref(props.item);
</script>

<style scoped lang="scss">
@use "./style/hashtag-card";
</style>