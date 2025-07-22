<template>
  <div class="new-profile-card shadow-card radius-massive background-white">
    <img
      class="new-profile-card__banner radius-massive"
      src="/image/bg-image-profile-card.png"
      alt="Profile banner"
      loading="lazy"
    />
    <div class="new-profile-card__avatar-wrapper">
      <Avatar
        class="new-profile-card__avatar"
        :name="profile.name"
        :image="profile.avatar"
        size="xl"
        :isEditable="false"
      />
    </div>
    <div class="new-profile-card__info">
      <div class="text-heading-medium new-profile-card__name">{{ profile.name }}</div>
      <div class="text-body-medium new-profile-card__role">{{ profile.role }}</div>
      <div class="new-profile-card__location">
        <Icon name="location_on" class="info-200" :size="16" :isFilled="true" />
        <span class="text-link new-profile-card__location-link">{{ profile.location }}</span>
      </div>
      <div class="text-body-small text-lightdark new-profile-card__email">{{ profile.email }}</div>
    </div>
    <button class="new-profile-card__create-post-btn shadow-button background-green-500 text-white text-body-medium radius-large">
      <Icon name="add_box" :size="20" class="mr-xs" :isFilled="true" />
      Create Post
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '../Avatar/Avatar.vue'
import Icon from '../Icon/Icon.vue'
import { dataNewProfile } from './data/DataNewProfile'

const profile = ref(dataNewProfile)
</script>

<style lang="scss" scoped>
@import '@/components/ProfileCard/style/new-profile-card';
</style> 