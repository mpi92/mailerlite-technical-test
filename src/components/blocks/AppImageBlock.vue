<script setup lang="ts">
import { ref, computed } from 'vue';

import AppBlockActionButton from './AppBlockActionButton.vue';
import type { ImageBlockData } from '@/types';
import defaultBlockImages from '@/config/defaultBlockImages';

const props = defineProps<{
  modelValue: ImageBlockData['data'],
}>();

const emit = defineEmits(['remove', 'duplicate', 'update:modelValue']);

const selectedImageIndex = ref(defaultBlockImages.indexOf(props.modelValue.url));
const selectedImageSrc = computed(() => defaultBlockImages[selectedImageIndex.value]);

function changeImage() {
  const nextIndex = selectedImageIndex.value + 1 === defaultBlockImages.length
    ? 0
    : selectedImageIndex.value + 1;

  selectedImageIndex.value = nextIndex;

  emit('update:modelValue', { ...props.modelValue, url: selectedImageSrc.value });
}
</script>

<template>
  <div data-testid="imageBlock" class="flex gap-2 justify-end">
    <AppBlockActionButton
      action="change"
      @click="changeImage()"
    />
    <AppBlockActionButton
      action="duplicate"
      @click="$emit('duplicate')"
    />
    <AppBlockActionButton
      action="remove"
      @click="$emit('remove')"
    />
  </div>

  <img
    :src="selectedImageSrc"
    alt="Image block"
    class="w-full h-auto mt-4"
  />
</template>