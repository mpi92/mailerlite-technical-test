<script setup lang="ts">
import { ref, watch } from 'vue';

import AppTextBlock from '@/components/blocks/AppTextBlock.vue';
import AppImageBlock from '@/components/blocks/AppImageBlock.vue';
import AppDragIcon from '@/components/icons/AppDragIcon.vue';
import {
  ToolType,
  type ImageBlockData,
  type TextBlockData,
  type ValidBlockData,
} from '@/types';

const props = defineProps<{
  type: ToolType,
  modelValue: ValidBlockData['data'],
}>();

const emit = defineEmits(['remove', 'duplicate', 'update:modelValue']);

const data = ref(props.modelValue);

watch(data, () => {
  emit('update:modelValue', data.value);
});
</script>

<template>
  <div
    data-testid="block"
    class="app-block relative bg-gray-900 rounded p-4 pt-10 shadow"
  >
    <button
      aria-label="Block Drag Handle"
      class="absolute top-0 left-0 w-full flex justify-end bg-main-800 rounded-t drag-handle cursor-move"
    >
      <AppDragIcon class="text-main-500 h-4 md:h-6" />
    </button>

    <AppTextBlock
      v-if="type === ToolType.Text"
      v-model="(data as TextBlockData['data'])"
      @duplicate="$emit('duplicate')"
      @remove="$emit('remove')"
    />

    <AppImageBlock
      v-else-if="type === ToolType.Image"
      v-model="(data as ImageBlockData['data'])"
      @duplicate="$emit('duplicate')"
      @remove="$emit('remove')"
    />
  </div>
</template>

<style>
.app-block.ghost {
  position: relative;
}

.app-block.ghost::after {
  @apply content-[''] absolute inset-0 bg-gray-800 border-[1.5px] border-dashed border-main-500 rounded;
}
</style>