<template>
  <div :class="[
    'flex md:flex-col items-center',
    'w-full md:w-max md:h-[calc(100vh-var(--header-height))]',
    'px-10',
  ]">
    <slot />
  </div>
</template>