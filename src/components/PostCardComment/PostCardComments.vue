<template>
    <div class="post-card-comments">
        <div class="post-card-comments__header">
            <h1 v-if="!item.avatar" class="post-card-comments__header-avatar">
                {{ abbrevation(item.name) }}
            </h1>
            <img v-else :src="item.avatar" class="post-card-comments__header-avatar--image" alt="Avatar" />
            <div class="post-card-comments__header-content">
                <div class="post-card-comments__header-content-top">
                    <h1 class="post-card-comments__header-content-top-name">{{ item.name }}</h1>
                    <p class="post-card-comments__header-content-top-time">{{ item.time }}</p>
                </div>
                <div class="post-card-comments__header-content-bottom">
                    <p class="post-card-comments__header-content-bottom-position">{{ item.position }}</p>
                    <p class="post-card-comments__header-content-bottom-position">-</p>
                    <div class="post-card-comments__header-content-bottom-location">
                        <img loading="lazy" src="/image/place-icon.svg"
                            class="post-card-comments__header-content-bottom-location-icon" />
                        <p class="post-card-comments__header-content-bottom-location-name">
                            {{ item.placeName }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p class="post-card-comments__content">{{ item.content }}</p>
        <div class="post-card-comments__footer">
            <div class="post-card-comments__footer-likes">
                <div class="post-card-comments__footer-likes-button" @click="likeCount(item)"
                    style="cursor: pointer">
                    <img loading="lazy" :src="likeIcon(item.isLikeIcon ?? false)"
                        class="post-card-comments__footer-likes-button-icon" />
                    <p class="post-card-comments__footer-likes-button-name"
                        :style="item.isLikeIcon ? 'color: green' : ''">Like</p>
                </div>
                <img v-if="item?.like" loading="lazy" src="/image/separator-likes.svg" />
                <p v-if="item?.like" class="post-card-comments__footer-likes-button-name">
                    {{ item.like ?? 0 }} Likes
                </p>
            </div>
            <div class="post-card-comments__footer-reply">
                <div class="post-card-comments__footer-reply-button" style="cursor: pointer"
                    @click="item.isShowReply = !item.isShowReply">
                    <img loading="lazy" src="/image/reply-icon.svg"
                        class="post-card-comments__footer-reply-button-icon" />
                    <p class="post-card-comments__footer-reply-button-name">Reply</p>
                </div>
                <img v-if="item.children" loading="lazy" src="/image/separator-likes.svg" />
                <p v-if="item.children" class="post-card-comments__footer-reply-button-name">
                    {{ item.children?.length }} Reply
                </p>
            </div>
        </div>
        <!-- Comment Child -->
        <div class="post-card-comments post-card-comments--child" v-show="item.isShowReply"
            v-for="(itemChild, index) in item.children" :key="index">
            <div class="post-card-comments__header">
                <h1 class="post-card-comments__header-avatar">{{ abbrevation(itemChild.name) }}</h1>
                <div class="post-card-comments__header-content">
                    <div class="post-card-comments__header-content-top">
                        <h1 class="post-card-comments__header-content-top-name">{{ itemChild.name }}</h1>
                        <p class="post-card-comments__header-content-top-time">{{ itemChild.time }}</p>
                    </div>
                    <div class="post-card-comments__header-content-bottom">
                        <p class="post-card-comments__header-content-bottom-position">
                            {{ itemChild.position }}
                        </p>
                        <p class="post-card-comments__header-content-bottom-position">-</p>
                        <div class="post-card-comments__header-content-bottom-location">
                            <img loading="lazy" src="/image/place-icon.svg"
                                class="post-card-comments__header-content-bottom-location-icon" />
                            <p class="post-card-comments__header-content-bottom-location-name">
                                {{ itemChild.placeName }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="post-card-comments__content">{{ itemChild.content }}</p>
            <div class="post-card-comments__footer">
                <div class="post-card-comments__footer-likes">
                    <div class="post-card-comments__footer-likes-button"
                        @click="likeCount(itemChild)" style="cursor: pointer">
                        <img loading="lazy" :src="likeIcon(itemChild.isLikeIcon ?? false)"
                            class="post-card-comments__footer-likes-button-icon" />
                        <p class="post-card-comments__footer-likes-button-name">Like</p>
                    </div>
                    <img loading="lazy" src="/image/separator-likes.svg" />
                    <p class="post-card-comments__footer-likes-button-name">
                        {{ itemChild.like }} Likes
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PostCardCommentProps } from "./types/PostCardComment";
import { computed, ref } from "vue";

const props = defineProps<{
    item: PostCardCommentProps;
}>();

const item = ref(props.item);

// const hasContent = computed(() => {
//     return item.value.name && item.value.content;
// });

const likeIcon = (isLikeIcon: boolean) => {
    return isLikeIcon ? "/image/liked-icon.svg" : "/image/like-icon.svg";
};

const abbrevation = computed(() => (name?: string) => {
    return name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2);
});

const likeCount = (item: any) => {
    console.log('item', item.like);
    console.log('islike', item.isLikeIcon);
    if (item.isLikeIcon){
        item.like = item.like - 1;
        item.isLikeIcon = false;
    } else {
        item.like = item.like + 1;
        item.isLikeIcon = true;
    }
    console.log('after', item.like);
}

// const name = "Jane Doe Rizkullah";

// console.log(name);

// console.log(name.split(','));

// console.log(name.split(' ').map((word) => {
//     return word[word.length - 2];
// }))

// console.log(name.split(' ').map((word) => {
//     return word.length - 2;
// }))

// console.log(name.split(' ').map((word) => {
//     return word[0];
// }).join(''));

// console.log(name.split(' ').map((word) => {
//     return word[0];
// }).join(',').substring(0, 3).split(','));
</script>

<style lang="scss" scoped>
@use "style/post-card-comments";
</style>
