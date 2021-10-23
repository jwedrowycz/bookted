<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <template v-if="$nuxt.$route.name == 'index'">
            <Hero />
        </template>
        <main class="container mx-auto px-3 lg:px-0 flex-1 mb-20">
            <template v-if="$nuxt.$route.name != 'auth-register'">
                <UtilitySearchInput />

            </template>
            <Nuxt />
        </main>
        <Footer />
    </div>
</template>

<style>

.dark-mode body {
    @apply bg-gray-900;
    background-color: #36333a;
}

.light-mode body{
    @apply bg-purple-100;
}

</style>