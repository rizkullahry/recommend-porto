<template>
  <div class="post-card">
    <div class="post-card__header">
      <Avatar class="post-card__header-avatar" :name="getInitials(item.userProfile.username)" :image="item.userProfile.avatar" size="lg" :isEditable="false" :borderColor="item.userProfile.avatarBorder" />
        <div class="post-card__header-content">
          <div class="post-card__header-content-user">
            <span class="sub-heading-medium neutral-600 post-card__header-content-username">{{ item.userProfile.username }}</span>
              <Icon name="more_vert" class="heading-small neutral-500 post-card__header-content-more-icon" :size="24" :isFilled="true"/>
          </div>
                <div class="post-card__header-content-position">
                    <span class="body-small neutral-600 post-card__header-content-position-name">{{ item.userProfile.position }}</span>
                    <span class="body-small neutral-600 post-card__header-content-position-minus">-</span>
                    <div class="post-card__header-content-address">
                        <Icon name="location_on" class="sub-heading-medium info-200 post-card__header-content-address-icon" :size="16" :isFilled="true" />
                        <span class="body-small info-200 post-card__header-content-address-name">{{ item.userProfile.address }}</span>
                    </div>
                </div>
                <span class="body-small neutral-500 post-card__header-content-time">{{ item.userProfile.postTime }}</span>
          </div>
        </div>

        <div class="post-card__content">
            <p class="sub-heading-small neutral-600 post-card__content-title">{{ item.title }}</p>
            <p class="body-small neutral-600 post-card__content-desc" :style="{ whiteSpace: 'pre-line' }" v-html="trimmedDesc" />
            <p v-if="isTrimmable"class="body-small neutral-500 post-card__content-desc-more" @click="toggleShowFullDesc">{{ showFullDesc ? "see less" : "...see more" }}</p>
        </div>

        <div class="post-card__engagements">
            <span class="body-small neutral-500 post-card__engagements-likes">{{ likesCount }} {{ likesCount > 1 ? 'Likes' : likesCount === 1 || likesCount === 0 ? 'Like' : '' }}</span>
            <span class="body-small neutral-500 post-card__engagements-border">{{ isLikeAndComment }}</span>
            <span class="body-small neutral-500 post-card__engagements-comments" v-if="!item.commentsDisable">{{ item.comments }} {{ isMoreComment }}</span>
        </div>
        <hr class="post-card__divider1"></hr>
        <div class="post-card__actions">
            <div class="post-card__actions-like" @click="toggleLike">
                <Icon name="thumb_up" :size="16" :isFilled="isLiked" :class="['body-small post-card__actions-like-icon', isLiked ? 'primary-500' : 'neutral-500']" />
                <span :class="['body-small post-card__actions-like-name', isLiked ? 'primary-500' : 'neutral-500']">Like</span>
            </div>
            <div class="post-card__actions-comment" @click="toggleComment">
                <Icon name="chat" :size="16" :isFilled="isCommented && !item.commentsDisable" :class="['body-small post-card__actions-comment-icon', isCommented && !item.commentsDisable? 'primary-500' : 'neutral-500']" />
                <span :class="['body-small post-card__actions-comment-name', isCommented && !item.commentsDisable ? 'primary-500' : 'neutral-500']">{{ !item.commentsDisable? "Comment" : "Comment Disabled" }}</span>
            </div>
            <div class="post-card__actions-copy" @click="toggleCopy">
                <Icon name="content_copy" :size="16" :isFilled="isCopied" :class="['body-small post-card__actions-copy-icon', isCopied ? 'primary-500' : 'neutral-500']" />
                <span :class="['body-small post-card__actions-copy-name', isCopied ? 'primary-500' : 'neutral-500']">{{ !isCopied ? "Copy Link" : "Copied" }}</span> 
            </div>
        </div>
        <hr v-if="!item.commentsDisable && (item.commentsData?.length ?? 0) > 0 && !item.isEditComment" class="post-card__divider2"></hr>
        <span v-if="item.isEditComment" class="post-card__more-comments">Show more comments</span>
    </div>
</template>

<script setup lang="ts">
import type { PostCardProps } from './types/PostCard';
import { ref, computed } from 'vue';
import Avatar from '../Avatar/Avatar.vue';
import Icon from '../Icon/Icon.vue';

const items = defineProps<{
    item: PostCardProps;
    data?: boolean;
}>();

const getInitials = (name: string): string => {
    const initials =name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2);
        return initials;
};

const maxLength = 350;
const showFullDesc = ref(false);

const trimmedDesc = computed(() => {
    if (showFullDesc.value || (items.item?.desc?.length ?? 0) <= maxLength) {
        return items.item?.desc;
    }
    return items.item?.desc?.slice(0, maxLength) + '...';
});

const isTrimmable = computed(() => (items.item?.desc?.length ?? 0) > maxLength);

const toggleShowFullDesc = () => {
    showFullDesc.value = !showFullDesc.value;
}

const isMoreComment = computed(() => {
    if ((items.item.comments ?? 0) > 1) {
        return "Comments";
    } else if ((items.item.comments ?? 0) === 1) {
        return "Comment";
    } else {
        return "";
    }
});

const isLikeAndComment = computed(() => {
    return (items.item.likes ?? 0) > 0 && (items.item.comments ?? 0) > 0 ? "|" : "";
});

const isLiked = ref(items.item.isLike);
const likesCount = ref(items.item.likes ?? 0); // defaults 0 when undefined

const toggleLike = () => {
    isLiked.value = !isLiked.value;

    if(isLiked.value) {
        likesCount.value++;
    } else {
        likesCount.value--;
    }
}

const isCommented = ref(items.item.isEditComment);

const toggleComment = () => {
    isCommented.value = !isCommented.value;
}

const isCopied = ref(items.item.isCopy);

const toggleCopy = () => {
    isCopied.value = true;

    setTimeout(() => {
        isCopied.value = false;
    }, 3000);
}

const spanClass = computed(() => {
    return !items.item.isCopy ? "post-card__actions-copy-icon-gray" : "post-card__actions-copy-icon-green";
});
</script>

<style scoped lang="scss">
@import 'style/post-card';
@import '../Avatar/style/_avatar.scss';
@import '../Icon/style/_icon.scss';
</style>