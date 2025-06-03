<template>
    <div class="profile-card">
        <div class="profile-card--padding">
            <img loading="lazy" src="/image/profile-background.jpg" class="profile-card--background-image" />
            <div class="profile-card--content">
                <Avatar class="profile-card--avatar" :name="item.name" :image="item.avatar" size="xl" :isEditable="true" />
                <div class="profile-card--content-text">
                    <span class="sub-heading-medium neutral-600 profile-card--name">{{ item.name }}</span>
                    <span class="body-small neutral-600 profile-card--desc">{{ item.desc }}</span>
                    <div class="profile-card--company">
                        <Icon name="location_on" class="body-small info-200" :size="16" :isFilled="true"/>
                        <span class="body-small info-200 profile-card--company-name">{{ item.location }}</span>
                    </div>
                    <span class="body-small text-lightdark profile-card--email">{{ item.email }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ProfileCardProps } from './types/ProfileCard';
import { computed, ref } from 'vue';
import Icon from '../Icon/Icon.vue';
import Avatar from '../Avatar/Avatar.vue';

const props = defineProps<{
    item: ProfileCardProps;
}>();

const item = ref(props.item);
</script>

<style scoped lang="scss">
@use "./style/profile-card"
</style>