<script setup lang="ts">
import { ref, watch } from 'vue';

import AppBlockActionButton from './AppBlockActionButton.vue';
import type { TextBlockData } from '@/types';

const props = defineProps<{
  modelValue: TextBlockData['data'],
}>();

const emit = defineEmits(['remove', 'update:modelValue']);

const textValue = ref(props.modelValue.text);

watch(textValue, () => {
  emit('update:modelValue', { ...props.modelValue, text: textValue.value });
});
</script>

<template>
  <div data-testid="textBlock">
    <div class="flex justify-end">
      <AppBlockActionButton
        action="remove"
        @click="$emit('remove')"
      />
    </div>

    <textarea
      v-model="textValue"
      aria-label="Text Block Content"
      :class="[
        'w-full min-h-16 md:min-h-32',
        'focus:outline-none rounded border border-transparent focus:border-main-500/50 focus:bg-gray-900 resize-none',
        'mt-4 bg-transparent text-sm md:text-base p-2 transition-colors',
      ]"
    />
  </div>
</template>