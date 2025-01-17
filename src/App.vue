<script setup lang="ts">
import { ref } from 'vue';

// Components
import AppHeader from '@/components/AppHeader.vue';
import AppToolbar from '@/components/AppToolbar.vue';
import AppToolSelector from '@/components/AppToolSelector.vue';

// Config
import defaultBlockImages from '@/config/defaultBlockImages';

const availableTools = [
  'text',
  'image',
];

const blocks = ref(new Set());

function addBlock(tool: string) {
  const defaultBlockValues = {
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

  // Log result
  console.log(JSON.stringify(Array.from(blocks.value), null, 2));
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