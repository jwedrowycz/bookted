<template>
    <button class="border border-1 w-full border-green-400 py-2 px-5 hover:bg-green-400 hover:text-purple-600 transition-all"
      :class="width"
    >
        <slot />
    </button>
</template>


<script>
  export default {
    props: {
      width: {
        type: String,
        default: 'w-full'
      }
    }
  }
</script>