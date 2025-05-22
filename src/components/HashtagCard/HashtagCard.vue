<template>
    <div class="hashtag-card">
        <div class="hashtag-card__title">
            <img class="hashtag-card__title-icon" :src="item.hashtagIcon" />
            <!-- <Label variant="h4" style="color: #047CDD" color="blue" shade="500" class="hashtag-card__title-text">Recommendations</Label> -->
            <span class="heading-large">Recommendations</span>
        </div>
        <div class="hashtag-card__posts">
            <Label variant="h7">{{ calculatePost(1) }}</Label>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { HashtagCardProps } from "./types/HashtagCard";
import { ref } from "vue";
import Label from "@/components/Label/Label.vue";
import Color from "@/components/Color/Color.vue";

const props = defineProps<{
    item: HashtagCardProps;
}>();

const item = ref(props.item);


const calculatePost = (postCount: number) => `${postCount} ${postCount > 1 ? 'Posts' : 'Post'}`;

</script>

<style scoped lang="scss">
@use "./style/hashtag-card";
</style>