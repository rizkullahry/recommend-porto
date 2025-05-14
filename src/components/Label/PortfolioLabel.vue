<template>
  <div 
    class="portfolio-label"
    :class="[
      `background-${color}-${level}`,
      `text-${textColor}-${textLevel}`,
      `radius-${radius}`,
      `p-${padding}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'
  level?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'
  textLevel?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  radius?: 'none' | 'small' | 'medium' | 'large' | 'massive' | 'circle'
  padding?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl'
}

withDefaults(defineProps<Props>(), {
  color: 'primary',
  level: '100',
  textColor: 'primary',
  textLevel: '900',
  radius: 'small',
  padding: 'xs'
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/label/portfolio-label';
</style> 