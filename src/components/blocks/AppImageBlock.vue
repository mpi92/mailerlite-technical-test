<script setup lang="ts">
import { ref } from 'vue';

import AppBlockActionButton from './AppBlockActionButton.vue';
import type { ImageBlockData } from '@/types';
import defaultBlockImages from '@/config/defaultBlockImages';

const props = defineProps<{
  modelValue: ImageBlockData['data'],
}>();

const emit = defineEmits(['remove', 'duplicate', 'update:modelValue']);

const selectedImageSrc = ref(
  defaultBlockImages[defaultBlockImages.indexOf(props.modelValue.url)],
);

function changeImage(src: string) {
  if (selectedImageSrc.value === src) return;

  selectedImageSrc.value = src;

  emit('update:modelValue', { ...props.modelValue, url: selectedImageSrc.value });
}
</script>

<template>
  <div data-testid="imageBlock" class="flex gap-2 justify-end">
    <AppBlockActionButton
      action="duplicate"
      @click="$emit('duplicate')"
    />
    <AppBlockActionButton
      action="remove"
      @click="$emit('remove')"
    />
  </div>

  <div class="flex gap-2 mt-4">
    <img
      v-for="imageSrc, idx in defaultBlockImages"
      :key="idx"
      :src="imageSrc"
      :class="[
        'w-12 h-12 cursor-pointer object-cover',
        { 'rounded border border-green-500': imageSrc === selectedImageSrc },
      ]"
      @click="changeImage(imageSrc)"
    />
  </div>
  
  <img
    :src="selectedImageSrc"
    alt="Image block"
    class="w-full h-auto mt-4"
  />
</template>