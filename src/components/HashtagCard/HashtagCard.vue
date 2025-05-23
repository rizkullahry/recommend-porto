<template>
    <div class="hashtag-card">
        <div class="hashtag-card__title">
            <Icon name="tag" class="info-200" :size="24" />
            <span class="sub-heading info-200 hashtag-card__title-text">Recommendations</span>
        </div>
        <span class="body-small neutral-500 hashtag-card__posts">{{ calculatePostCount() }}</span>
    </div>
</template>

<script setup lang="ts">
import type { HashtagCardProps } from "./types/HashtagCard";
import Icon from "../Icon/Icon.vue";

// making the props required named item -> props.item.hashtagIcon
const props = defineProps<{
    item: HashtagCardProps;
}>();

// destructuring the props -> item.hashtagIcon
const { item } = props;

const calculatePostCount = () => {
    const count = item.postCount?.length ?? 0;
    return `${count} ${count > 1 ? 'Posts' : 'Post'}`;
}
</script>

<style scoped lang="scss">
@use "./style/hashtag-card";
</style>