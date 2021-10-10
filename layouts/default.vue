<template>
    <div>
        <Navbar />
        <template v-if="$nuxt.$route.name == 'index'">
            <Hero />
        </template>
        <div class="container mx-auto px-3 lg:px-0">
            <Nuxt />
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

.font-Comfortaa {
	font-family: "Comfortaa", serif;
}

body {
	font-family: "Comfortaa", serif;
    @apply bg-purple-100
}
</style>