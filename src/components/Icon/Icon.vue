<template>
    <i class="material-symbols-rounded"
    :class="[colorClass, { 'material-symbols-fill': isFilled }]"
    :style="sizeStyle">
        <slot>{{ name }}</slot>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from './types/Icon';
import { camelToSnake, pascalToSnake, normalToSnake, kebabToSnake } from './utils/iconTransform';

const props = defineProps<IconProps>();

const name = computed(() => {
    const convertTypeCase = checkTypeCase()
    return convertTypeCase
}) 

const checkTypeCase = () => {
    const str = props.name
    if (/^[a-z]+([A-Z][a-z]*)+$/.test(str)) {
        return camelToSnake(str)
    } else if (/^[A-Z][a-zA-Z]*$/.test(str)) {
        return pascalToSnake(str)
    } else if (/^[a-z\s]+$/i.test(str)) {
        return normalToSnake(str)
    } else if (/^[a-z]+(-[a-z]+)*$/.test(str)) {
        return kebabToSnake(str)
    } else if (/^[a-z]+(_[a-z]+)*$/.test(str)) {
        return `${props.name}`
    } else {
        return
    }
}

const colorClass = computed(() => [
    `text-${props.color}-${props.shade}`,
    `bg-${props.backgroundColor}-${props.backgroundShade}`
])

const sizeStyle = computed(() => ({
    fontSize: `${props.size}px`,
    lineHeight: `${props.size}px`,
    width: `${props.size}px`,
    height: `${props.size}px`
}))
</script>

<style lang="scss" scoped>
@import '@/components/Icon/style/_icon.scss';
</style>   