<template>
    <div>
        <Navbar />
        <template v-if="$nuxt.$route.name == 'index'">
            <Hero />
        </template>
        <div class="container mx-auto px-3 lg:px-0">
            <template v-if="$nuxt.$route.name != 'auth-register'">
                <SearchInput />

            </template>
            <Nuxt />
        </div>
    </div>
</template>

<style>

.dark-mode body {
    @apply bg-gray-900;
    background-color: #4b4453;
}

.light-mode body{
    @apply bg-purple-100;
}

</style>