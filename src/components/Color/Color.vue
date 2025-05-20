<template>
  <span :class="colorClass">
    <slot>{{ color }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ColorProps } from './types/Color';

const props = defineProps<ColorProps>();

const colorClass = computed(() => {
  return [
    `text-${props.color}-${props.shade}`,
    `bg-${props.backgroundColor}-${props.backgroundShade}`
  ]
});

</script>

<style lang="scss" scoped>
@import './style/_color.scss';

.color-component {
  padding: 1rem;
  border-radius: 4px;
}
</style> 