<template>
  <div :class="[
    'flex md:flex-col items-center',
    'w-full md:w-max h-[var(--header-height)] md:h-[calc(100vh-var(--header-height))]',
    'px-10 border-t-2 border-main-800',
  ]">
    <slot />
  </div>
</template>