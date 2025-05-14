<template>
    <div class="social-content">
        <h3 class="social-content--desc">{{ item.description }}</h3>
        <div class="social-content--icon">
            <div class="social-content--icon-pad1">
                <img loading="lazy" :src="item.linkedinIcon" class="social-content--icon-pad1-linkedin" />
            </div>
            <div class="social-content--icon-pad2">
                <img loading="lazy" :src="item.youtubeIcon" class="social-content--icon-pad2-youtube" />
            </div>
            <div class="social-content--icon-pad3">
                <img loading="lazy" :src="item.instagramIcon" class="social-content--icon-pad3-instagram" />
            </div>
            <div class="social-content--icon-pad4">
                <img loading="lazy" :src="item.facebookIcon" class="social-content--icon-pad4-facebook" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { SocialContentProps } from './types/SocialContent';
import { ref } from 'vue';

const props = defineProps<{
    item: SocialContentProps;
}>();

const item = ref(props.item);
</script>

<style scoped lang="scss">
@use "./style/social-content"
</style>