<script setup lang="ts">
import AppStringTextIcon from '@/components/icons/AppStringTextIcon.vue';
import AppImageIcon from '@/components/icons/AppImageIcon.vue';
import type { ToolType } from '@/types';

const props = defineProps<{
  type: ToolType,
}>();

const IconComponent = {
  text: AppStringTextIcon,
  image: AppImageIcon,
}[props.type];
</script>

<template>
  <button
    type="button"
    class="relative flex flex-col items-center justify-center p-2 cursor-pointer group"
  >
    <span class="absolute top-0 right-0 text-yellow-500">+</span>
    <component
      :is="IconComponent"
      :class="[
        'w-8 h-8 md:w-10 md:h-10',
        'text-main-500 group-hover:text-main-600 transition-colors',
      ]"
    />
    <span class="capitalize text-sm md:text-base">
      {{ type }}
    </span>
  </button>
</template>