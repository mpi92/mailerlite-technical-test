<script setup lang="ts">
import AppStringTextIcon from '@/icons/AppStringTextIcon.vue';
import AppImageIcon from '@/icons/AppImageIcon.vue';
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
  <div class="flex flex-col items-center justify-center p-2 cursor-pointer group">
    <component
      :is="IconComponent"
      :class="[
        'w-8 h-8 md:w-10 md:h-10',
        'text-main-500 group-hover:text-main-600 transition-colors',
      ]"
    />
    <p class="capitalize text-sm md:text-base">
      {{ type }}
    </p>
  </div>
</template>