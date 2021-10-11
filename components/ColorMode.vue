<template>
    <button class=" capitalize" @click="changeMode">
    {{ btnLabel }}
    </button>
</template>

<script>
export default {
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    },
    methods: {
        changeMode() {
            this.$colorMode.preference = 
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
}
</script>