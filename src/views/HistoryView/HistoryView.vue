<template>
    <div class="history-view">
        <Header :item="dataHeader" />
        <div class="history-view__main">    
            <div class="history-view__back-button">
                <img loading="lazy" src="/image/arrow-back.svg" class="history-view__back-button-icon">
                <p class="history-view__back-button-name">Back to Home</p>
            </div>
            <div class="history-view__sections">
                <div class="history-view__profile-section">
                    <ProfileCard :item="dataProfileSection" />
                    <SocialContent :item="dataSocialContent" />     
                </div>
                <div class="history-view__content">
                    <HashtagCard :item="dataHashtagCard" />
                    <div class="history-view__feeds" v-for="(post, index) in dataPost" 
                    :key="`post-${index}`">
                        <PostCard :item="post" :data="true"/>
                        <template v-if="post.commentsData">
                            <PostCardComment 
                                v-for="(comment, index) in post.commentsData" 
                                :key="`comment-${index}`" 
                                :item="comment" />
                        </template>
                            <div v-if="post.commentsData?.length > 1" class="history-view__more-comments">
                                <p class="history-view__more-comments-name">Show more comments</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';
import { dataProfileSection } from '@/components/ProfileCard/data/DataProfile';
import SocialContent from '@/components/SocialContent/SocialContent.vue';
import { dataSocialContent } from '@/components/SocialContent/data/DataSocial';
import HashtagCard from '@/components/HashtagCard/HashtagCard.vue';
import { dataHashtagCard } from '@/components/HashtagCard/data/DataHashtag';
import PostCard from '@/components/PostCard/PostCard.vue';
import { dataPostCard } from '@/components/PostCard/data/DataPost';
import PostCardComment from '@/components/PostCardComment/PostCardComments.vue';
import Header from '@/components/Header/Header.vue';
import { dataHeader } from '@/components/Header/data/DataHeader';

const dataPost = ref(dataPostCard);
const showMoreComments = (post: number) => {
  console.log('Show more comments for post:', post);
};
</script>

<style scoped lang="scss">
@import './style/history-view.scss';
</style>
