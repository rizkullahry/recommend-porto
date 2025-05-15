<template>
  <div class="color-component"
    :class="[
      `text-${color}-${shade}`,
      `bg-${backgroundColor}-${backgroundShade}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  shade?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  backgroundColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  backgroundShade?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}

withDefaults(defineProps<Props>(), {
  color: 'primary',
  shade: '900',
  backgroundColor: 'primary',
  backgroundShade: '100'
})
</script>

<style lang="scss" scoped>
@import './style/_color.scss';

.color-component {
  padding: 1rem;
  border-radius: 4px;
}
</style> 