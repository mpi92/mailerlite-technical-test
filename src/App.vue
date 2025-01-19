<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Components
import AppHeader from '@/components/AppHeader.vue';
import AppToolbar from '@/components/AppToolbar.vue';
import AppToolSelector from '@/components/AppToolSelector.vue';
import AppBlock from '@/components/blocks/AppBlock.vue';

// Utils
import getDefaultBlockValue from '@/utils/getDefaultBlockValue';
import Sortable from 'sortablejs';

// Types
import {
  ToolType,
  type ValidBlockData,
} from '@/types';

const availableTools: ToolType[] = [
  ToolType.Text,
  ToolType.Image,
];

const blocks = ref<ValidBlockData[]>([]);
const sortableBlocksRef = ref<HTMLElement | null>(null);
const blocksListUpdateKey = ref(0);

function addBlock(tool: ToolType) {
  const blockData = getDefaultBlockValue(tool);

  if (!blockData) return;

  blocks.value.push(blockData);
}

function duplicateBlock(index: number) {
  blocks.value.splice(
    index,
    0,
    { ...blocks.value[index] },
  );
  blocksListUpdateKey.value += 1;
}

function removeBlock(index: number) {
  blocks.value.splice(index, 1);
  blocksListUpdateKey.value += 1;
}

function saveChanges() {
  alert(JSON.stringify(blocks.value, null, 2));
}

function onDragEnd(evt: Sortable.SortableEvent) {
  if (evt.oldIndex === evt.newIndex) return;

  // Remove the element from the old index
  const [movedBlock] = blocks.value.splice(evt.oldIndex!, 1);

  // Insert the element at the new index
  blocks.value.splice(evt.newIndex!, 0, movedBlock);

  blocksListUpdateKey.value += 1;
}

onMounted(() => {
  if (!sortableBlocksRef.value) return;

  Sortable.create(sortableBlocksRef.value, {
    ghostClass: 'ghost',
    handle: '.drag-handle',
    animation: 150,
    onEnd: onDragEnd,
  });
});
</script>

<template>
  <div class="h-screen w-screen overflow-hidden flex flex-col md:grid grid-cols-[min-content]">
    <AppHeader class="col-span-2 shrink-0" />
  
    <AppToolbar class="shrink-0 order-2 md:order-none">
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

    <section
      aria-label="Main Content"
      ref="sortableBlocksRef"
      :class="[
        'flex flex-col items-center gap-2',
        'w-full h-full min-h-[calc(100vh-var(--header-height)*2)] overflow-y-scroll',
        'bg-gray-800 p-10 rounded-tl-xs',
      ]"
    >
      <AppBlock
        v-for="block, idx in blocks"
        :key="`${idx}_${blocksListUpdateKey}`"
        class="w-full max-w-screen-sm"
        :type="block.type"
        v-model="block.data"
        @remove="removeBlock(idx)"
        @duplicate="duplicateBlock(idx)"
      />
    </section>
  </div>
</template>