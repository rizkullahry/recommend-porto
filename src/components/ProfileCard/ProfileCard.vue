<template>
    <div class="profile-card">
        <div class="profile-card--padding">
            <img loading="lazy" src="/image/profile-background.jpg" class="profile-card--background-image" />
            <div class="profile-card--content">
                <div v-if="item.avatar" class="profile-card--avatar" :style="{ backgroundImage: `url(${item.avatar})` }"></div>
                <div v-else class="profile-card--avatar">{{ abbreviation(item.name) }}</div>
                <div class="profile-card--content-text">
                    <h2 class="profile-card--name">{{ item.name }}</h2>
                    <p class="profile-card--desc">{{ item.desc }}</p>
                    <div class="profile-card--company">
                        <img loading="lazy" :src="item.locationIcon" class="profile-card--company-icon" />
                        <p class="profile-card--company-name">{{ item.location }}</p>
                    </div>
                    <p class="profile-card--email">{{ item.email }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ProfileCardProps } from './types/ProfileCard';
import { computed, ref } from 'vue';

const props = defineProps<{
    item: ProfileCardProps;
}>();

const item = ref(props.item);

const abbreviation = computed(() => (name?: string) => {
    return name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2);
});
</script>

<style scoped lang="scss">
@use "./style/profile-card"
</style>