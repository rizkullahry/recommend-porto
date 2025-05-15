<template>
  <div class="post-card">
    <div class="post-card__header">
      <img loading="lazy" :src="item.userProfile.avatar" class="post-card__header-avatar" />
        <div class="post-card__header-content">
          <div class="post-card__header-content-company">
            <h2 class="post-card__header-content-company-name">{{ item.userProfile.username }}</h2>
              <img loading="lazy" src="/image/more-icon.svg" class="post-card__header-content-more-icon" />
          </div>
                <div class="post-card__header-content-position">
                    <h4 class="post-card__header-content-position-name">{{ item.userProfile.position }}</h4>
                    <h4 class="post-card__header-content-position-minus">-</h4>
                    <div class="post-card__header-content-address">
                        <img loading="lazy" src="/image/place-icon.svg" class="post-card__header-content-address-icon" />
                        <h4 class="post-card__header-content-address-name">{{ item.userProfile.address }}</h4>
                    </div>
                </div>
                <p class="post-card__header-content-time">{{ item.userProfile.postTime }}</p>
          </div>
        </div>

        <div class="post-card__content">
            <h3 class="post-card__content-title">{{ item.title }}</h3>
            <p class="post-card__content-desc" :style="{ whiteSpace: 'pre-line' }" v-html="item.desc" />
            <p class="post-card__content-desc-more">...see more</p>
        </div>

        <div class="post-card__engagements">
            <p class="post-card__engagements-likes">{{ item.likes }}</p>
            <p class="post-card__engagements-likes-name">{{ item.likesName }}</p>
            <p class="post-card__engagements-border">|</p>
            <p class="post-card__engagements-comments" v-if="!item.commentsDisable">{{ item.comments }} {{ item.commentsName }}</p>
        </div>
        <hr class="post-card__divider1"></hr>
        <div class="post-card__actions">
            <div class="post-card__actions-like" @click="item.isLike = !item.isLike">
                <!-- <span loading="lazy" src="/image/like-icon.svg" class="post-card__actions-like-icon"></span> -->
                <span class="material-symbols-outlined" :style="{ color: item.isLike ? 'green' : 'gray' }">thumb_up</span>
                <p class="post-card__actions-like-name" :style="{ color: item.isLike ? 'green' : 'gray' }">Like</p>
            </div>
            <div class="post-card__actions-comment" @click="item.isEditComment = !item.isEditComment">
                <!-- <img loading="lazy" src="/image/chat-icon.svg" :style="{ color: !item.isEditComment ? 'gray' : 'green' }" class="post-card__actions-comment-icon" /> -->
                <span class="material-symbols-outlined" :style="{ color: !item.isEditComment ? 'gray' : 'green' }">chat</span>
                <p class="post-card__actions-comment-name" :style="{ color: !item.isEditComment ? 'gray' : 'green' }">{{ !item.commentsDisable? "Comment" : "Comment Disabled" }}</p>
            </div>
            <div class="post-card__actions-copy" @click="item.isCopy = !item.isCopy">
                <!-- <img loading="lazy" src="/image/copy-icon.svg" :style="{ color: !item.isCopy ? 'gray' : 'green' }" class="post-card__actions-copy-icon" /> -->
                <span class="material-symbols-outlined" :class="spanClass">content_copy</span>
                <p class="post-card__actions-copy-name" :style="{ color: !item.isCopy ? 'gray' : 'green' }">{{ !item.isCopy ? "Copy Link" : "Copied" }}</p> 
            </div>
        </div>
        <span v-if="item.isEditComment" class="post-card__divider2">Show more comments</span>
        
    </div>
</template>

<script setup lang="ts">
import type { PostCardProps } from './types/PostCard';
import { ref, computed } from 'vue';

const items = defineProps<{
    item: PostCardProps;
    data?: boolean;
}>();

const spanClass = computed(() => {
    return !items.item.isCopy ? "post-card__actions-copy-icon-gray" : "post-card__actions-copy-icon-green";
});

const isMoreLike = computed(() => {
    return items.item.likes > 1 ? "Likes" : "Like";
});

const getInitials = (name: string): string => {
    const initials =name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2);
        return initials;
};


</script>

<style scoped lang="scss">
@import 'style/post-card';
</style>