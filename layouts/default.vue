<template>
    <div>
        <Navbar />
        <template v-if="$nuxt.$route.name == 'index'">
            <Hero />
        </template>
        <div class="container mx-auto px-3 lg:px-0">
            <template v-if="!$nuxt.$route.name == 'auth-register'">
                <SearchInput />
            </template>
            <Nuxt />
        </div>
    </div>
</template>

<style>

</style>