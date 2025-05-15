<template>
    <span :class="labelClass">
        <slot>{{ text }}</slot>
        <span v-if="required" class="required-symbol">*</span>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LabelProps } from './types/Label';

const props = defineProps<LabelProps>();

const labelClass = computed(() => {
    return [
        [`label-${props.variant}`], //variant of the label
    ];
});

</script>

<style scoped lang="scss">
@import 'style/_label.scss';
</style>