<template>
    <div class="avatar-container">
        <div class="avatar" :class="classes"
            :style="{
                backgroundColor: stringToHexColor(name)
            }"
            @mouseover="onMouseOver"
            @mouseleave="onMouseLeave"
            @click="onClick"
        >
            <slot>
                <img 
                    v-if="image && !state"
                    class="avatar__image"
                    :class="avatarClass"
                    :src="image"
                    alt="Avatar"
                />
                <span v-if="!image && !state">{{ getInitial(name) }}</span>
                <Icon v-if="state === 'no-image'" name="account_circle" class="avatar__icon-state" />
                <Icon v-if="state === 'error'" name="hide_image"  class="avatar__icon-state" />
            </slot>

            <div v-if="showEdit" class="avatar__edit">
                <div class="avatar__edit-backdrop"></div>
                <Icon name="edit" class="avatar__icon-edit" /> 
            </div>
        </div>
        <span v-if="isShowName" :class="nameClass" class="text-format-body">{{ name }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { AvatarProps } from './types/Avatar';

const props = withDefaults(defineProps<AvatarProps>(), 
    {
        orientation: 'horizontal',
        size: 'md',
        borderColor: 'primary-500'
    }
)

const emits = defineEmits(['click', 'mouseover', 'mouseleave'])

const showEdit = ref<boolean>(false)

const sizeClass = computed(() => props.size ? `avatar-${props.size}` : '')
const colorClass = computed(() => props.color ? `avatar-${props.color}` : '')
const borderColorClass = computed(() => props.borderColor ? `avatar-${props.borderColor}` : '')
const orientationClass = computed(() => props.orientation ? `avatar-${props.orientation}` : '')
const stateClass = computed(() => props.state ? `avatar-${props.state}` : '')
const classes = computed(() => {
    return [
        sizeClass.value,
        colorClass.value,
        borderColorClass.value,
        orientationClass.value,
        stateClass.value
    ]
})

const stringToHexColor = (str: string) => {
    // Generate a hash from the string
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }

    // Convert the hash to a 6-digit hexadecimal color code 
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const value = (hash >> (i * 4)) & 0xFF
        color += ('00' + value.toString(16)).slice(-2)
    }

    return color.slice(0, 7)
}

const getInitial = (name: string) => {
    const splitName = name.split(' ')
    const firstInitial = splitName[0].charAt(0)
    const lastInitial = splitName[splitName.length - 1].charAt(0)
    return `${firstInitial}${lastInitial}`
}

const onMouseOver = (event: MouseEvent) => {
    if (!props.isEditable) 
    return emits('mouseover', event)
    showEdit.value = true
}

const onMouseLeave = (event: MouseEvent) => {
    if (!props.isEditable)
    return emits('mouseleave', event)
    showEdit.value = false
}

const onClick = () => {
    emits('click')
}
</script>

<style scoped lang="scss">
@import './style/_avatar.scss';
</style>