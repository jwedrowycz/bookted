<template>
    <div :class="['inline-block rounded-full bg-purple-600 px-2 text-white', textSize, margin ]"><slot /></div>
</template>

<script>
export default {
    props: {
        textSize: {
            type: String,
            default: ''
        },
        margin: {
            type: String,
            default: ''
        }
    }
}
</script>