<script setup lang="ts">
// Components
import AppHeader from '@/components/AppHeader.vue';
import AppToolbar from '@/components/AppToolbar.vue';
</script>

<template>
  <div class="h-screen w-screen overflow-hidden grid grid-cols-[min-content]">
    <AppHeader class="col-span-2" />
  
    <AppToolbar>
      toolbar
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