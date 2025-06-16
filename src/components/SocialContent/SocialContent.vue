<template>
    <div class="social-content">
        <span class="body-small neutral-500 social-content--desc">Connect with Me</span>
        <div class="social-content--icon">
            <div class="social-content--icon-pad1">
                <img loading="lazy" src="/image/linkedin-icon.svg" class="social-content--icon-pad1-linkedin" />
            </div>
            <div class="social-content--icon-pad2">
                <img loading="lazy" src="/image/youtube-icon.svg" class="social-content--icon-pad2-youtube" />
            </div>
            <div class="social-content--icon-pad3">
                <img loading="lazy" src="/image/instagram-icon.svg" class="social-content--icon-pad3-instagram" />
            </div>
            <div class="social-content--icon-pad4">
                <img loading="lazy" src="/image/facebook-icon.svg" class="social-content--icon-pad4-facebook" />
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