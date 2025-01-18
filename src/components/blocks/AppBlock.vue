<script setup lang="ts">
import { ref, watch } from 'vue';

import AppTextBlock from '@/components/blocks/AppTextBlock.vue';
import AppImageBlock from '@/components/blocks/AppImageBlock.vue';
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

const emit = defineEmits(['remove', 'update:modelValue']);

const data = ref(props.modelValue);

watch(data, () => {
  emit('update:modelValue', data.value);
});
</script>

<template>
  <div class="bg-gray-900 rounded p-4 shadow">
    <AppTextBlock
      v-if="type === ToolType.Text"
      v-model="(data as TextBlockData['data'])"
      @remove="$emit('remove')"
    />

    <AppImageBlock
      v-else-if="type === ToolType.Image"
      v-model="(data as ImageBlockData['data'])"
      @remove="$emit('remove')"
    />
  </div>
</template>