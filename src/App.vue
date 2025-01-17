<script setup lang="ts">
import { ref } from 'vue';

// Components
import AppHeader from '@/components/AppHeader.vue';
import AppToolbar from '@/components/AppToolbar.vue';
import AppToolSelector from '@/components/AppToolSelector.vue';

// Config
import defaultBlockImages from '@/config/defaultBlockImages';

// Types
import type { ResultPayload, ToolType } from '@/types';

const availableTools: ToolType[] = [
  'text',
  'image',
];

const blocks = ref(new Set());

function addBlock(tool: ToolType) {
  const defaultBlockValues: ResultPayload = {
    // Text block
    text: {
      type: 'text',
      data: {
        text: 'Insert text here...',
      },
    },
    // Image block
    image: {
      type: 'image',
      data: {
        url: defaultBlockImages[0],
      },
    },
  };

  blocks.value.add(defaultBlockValues[tool]);
}

function saveChanges() {
  const data = JSON.stringify(
    Array.from(blocks.value),
    null,
    2,
  );

  console.log(data);
}
</script>

<template>
  <div class="h-screen w-screen overflow-hidden flex flex-col md:grid grid-cols-[min-content]">
    <AppHeader class="col-span-2 shrink-0" />
  
    <AppToolbar>
      <AppToolSelector
        v-for="tool in availableTools"
        :key="tool"
        :type="tool"
        @click="addBlock(tool)"
        class="first:-ml-2 md:first:ml-0"
      />

      <button
        type="button"
        :class="[
          'ml-auto md:ml-0 md:mt-auto md:mb-10',
          'bg-main-500 text-white hover:bg-main-600',
          'rounded-md p-2 transition-colors'
        ]"
        @click="saveChanges"
      >
        Save
      </button>
    </AppToolbar>

    <section :class="[
      'flex flex-col items-center gap-2',
      'w-full h-full min-h-[calc(100vh-var(--header-height))] overflow-y-scroll',
      'bg-gray-800 p-10 rounded-tl-xs',
    ]">
      content
    </section>
  </div>
</template>