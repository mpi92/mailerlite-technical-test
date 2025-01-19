<script setup lang="ts">
import AppRenewIcon from '@/components/icons/AppRenewIcon.vue';
import AppTrashCanIcon from '@/components/icons/AppTrashCanIcon.vue';
import AppDuplicateIcon from '@/components/icons/AppDuplicateIcon.vue';

type BlockButtonAction = 'change' | 'duplicate' | 'remove';

const props = defineProps<{
  action: BlockButtonAction,
}>();

const IconComponent = {
  change: AppRenewIcon,
  remove: AppTrashCanIcon,
  duplicate: AppDuplicateIcon,
}[props.action];
</script>

<template>
  <button
    type="button"
    :aria-label="action"
    :class="[
      'text-main-500 rounded border border-main-500 hover:border-main-600 hover:text-main-600',
      'p-1 cursor-pointer',
    ]"
  >
    <component
      :is="IconComponent"
      class="w-6 h-6"
    />
  </button>
</template>