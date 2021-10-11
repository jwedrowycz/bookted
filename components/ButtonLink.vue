<template>
    <NuxtLink 
        :to="url"
        :class="[
            {
            'bg-purple-600 text-white hover:bg-purple-900 hover:text-gray-200 transition-all' : primary 
            },
            {
            'border border-green-500 hover:bg-green-500 hover:text-white transition-all' : secondary
            },
            {
            'border bg-white border-purple-600 hover:bg-purple-200 hover:text-gray-700 transition-all' : primaryOutline
            },
            width,
            paddingX,
            paddingY
        ]"
        >
      <slot />
    </NuxtLink>

</template>

<script>
  export default {
    props: {
      primary: {
        type: Boolean,
      },
      secondary: {
        type: Boolean,
      },
      primaryOutline: {
        type: Boolean
      },
      width: {
        type: String,
        default: 'w-full'
      },
      paddingX: {
        type: String,
        default: 'px-3'
      },
      paddingY: {
        type: String,
        default: 'py-2'
      },
      url: {
          type: Object,
          default: ''
      }
    }
  }
</script>
