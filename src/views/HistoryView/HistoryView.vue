<template>
    <div class="history-view">
        <Header :item="dataHeader" />
        <div class="history-view__main">    
            <div class="history-view__back-button">
                <Icon name="arrow_back" class="history-view__back-button-icon" :size="16" :isFilled="true"/>
                <span class="history-view__back-button-name">Back to Home</span>
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
                            <div class="history-view__more-comments">
                                <p class="history-view__more-comments-name">Show more comments</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button class="floating-add-button" @click="showAddPost=true">
            <icon name="add" :size="24" :isFilled="true" />
        </button>

        <div v-if="showAddPost" class="modal-overlay">
            <div class="modal-content">
                <AddPostForm @close="showAddPost=false" @add-post="addPost" />
            </div>
        </div> -->
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
