<template>
    <div class="post-form__card">
        <!-- <span class="heading-small neutral-600">{{ isEditing ? 'Edit Post' : 'Add Post' }}</span> -->
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PostFormProps } from './PostForm'

const props = defineProps<PostFormProps>()
</script>

<style scoped lang="scss">
@use './_post-form.scss';
</style>