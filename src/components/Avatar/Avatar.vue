<template>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { AvatarProps } from './types/Avatar';

const props = withDefaults(defineProps<AvatarProps>(), 
    {
        orientation: 'horizontal',
        size: 'md'
    }
)

const emits = defineEmits(['click', 'mouseover', 'mouseleave'])

const showEdit = ref<boolean>(false)

const sizeClass = computed(() => props.size ? `avatar-${props.size}` : '')
const colorClass = computed(() => props.color ? `avatar-${props.color}` : '')
const classes = computed(() => {
    return [
        sizeClass.value,
        colorClass.value
    ].filter(Boolean).join(' ')
})
</script>

<style scoped lang="scss">
@import './styles/avatar.scss';
</style>