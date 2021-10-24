<template>
    <div class="flex flex-col lg:flex-row bg-white ">
        <div class="flex-none w-full lg:relative lg:w-48">
            <template v-if="auction.images[0]">
                <img :src="auction.images[0]" alt="" class="lg:absolute inset-0 w-full h-96 sm:h-96 lg:h-full object-cover" />
            </template>
        </div>
        <div class="flex-auto p-6 flex flex-col">
            <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">
                <NuxtLink :to="{ name: 'auctions-id', params: { 'id': auction.id }}" class="hover:text-purple-800 transition-all">
                    {{ auction.book.title }}
                </NuxtLink>
            </h1>
            <div class="w-full flex-none text-sm font-medium text-gray-500 my-2">
                 {{ auction.price }} zł
            </div>
            </div>
        
            <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-1 flex space-x-3">
                <UtilityButton primary width="w-full" paddingX="px-1" paddingY="py-1">Kup teraz</UtilityButton>
                <UtilityButton secondary width="w-full" paddingX="px-1" paddingY="py-1">Napisz do sprzedawcy</UtilityButton>

            </div>
            <!-- <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                <svg width="20" height="20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
            </button> -->
            </div>
            <div class="flex items-center pb-3 font-semibold break-all">
                <img src="https://source.unsplash.com/random/100x100" alt="" class="rounded-full mr-2 h-8 w-8 object-cover">
                <NuxtLink :to="{ name: 'users-username', params: { 'username': 'janedoe' }}" class="hover:text-purple-600 transition-all">{{ auction.user.username }}</NuxtLink>
            </div>
            <div class="flex justify-between mb-0 my-auto">
                <div>
                    <p class="text-sm text-gray-500">
                        {{ auction.created_at }}
                    </p>
                </div>
                <div class="text-sm flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="rgba(107, 114, 128)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {{ auction.views }}
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['auction']
}
</script>