<template>
    <div class="flex flex-col lg:flex-row bg-white ">
        <div class="flex-none w-full lg:relative lg:w-48">
            <img :src="book.book_image" alt="" class="lg:absolute inset-0 w-full h-full sm:h-96 lg:h-full object-cover" />
        </div>
        <div class="flex-auto p-6 flex flex-col">
            <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">
                <NuxtLink :to="{ name: 'books-id', params: { 'id': 3 }}" class="hover:text-purple-800 transition-all">
                    {{ book.title }}
                </NuxtLink>
            </h1>
            <div class="w-full flex-none text-sm font-medium text-gray-500 my-2">
                 110 zł
            </div>
            </div>
        
            <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-1 flex space-x-3">
                <Button primary width="w-full" paddingX="px-1" paddingY="py-1">Kup teraz</Button>
                <Button secondary width="w-full" paddingX="px-1" paddingY="py-1">Napisz do sprzedawcy</Button>

            </div>
            <!-- <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                <svg width="20" height="20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
            </button> -->
            </div>
            <div class="flex items-center pb-3 font-semibold">
                <img src="https://source.unsplash.com/random/100x100" alt="" class="rounded-full mr-2 h-8 w-8 object-cover">
                Jane Doe
            </div>
            <div class="flex mb-0 my-auto">
                <p class="text-sm text-gray-500">
                    dzisiaj 20:23
                </p>
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
    props: ['book']
}
</script>