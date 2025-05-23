<template>
    <div class="hashtag-card">
        <div class="hashtag-card__title">
            <img class="hashtag-card__title-icon" :src="item.hashtagIcon" />
            <span>Recommendations</span>
        </div>
        <div class="hashtag-card__posts">
            <span>12 Posts</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { HashtagCardProps } from "./types/HashtagCard";

const props = defineProps<{
    item: HashtagCardProps;
}>();

const { item } = props;
</script>

<style scoped lang="scss">
@use "./style/hashtag-card";
</style>