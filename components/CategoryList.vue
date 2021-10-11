<template>
    <div class="flex flex-wrap gap-5 lg:m-0">
        <ButtonLink :url="{ name: 'books-category', params: { 'id': 3 }, query: {'category': 'Kryminał'}}" primaryOutline width="w-none">Kryminał<NumberSpan margin="ml-2">120</NumberSpan></ButtonLink>
        <Button primaryOutline width="w-none">Thriller<NumberSpan margin="ml-2">83</NumberSpan></Button>
        <Button primaryOutline width="w-none">Popularnonaukowa<NumberSpan margin="ml-2">23</NumberSpan></Button>
        <Button primaryOutline width="w-none">Obyczajowa<NumberSpan margin="ml-2">233</NumberSpan></Button>
        <Button primaryOutline width="w-none">Edukacyjna<NumberSpan margin="ml-2">0</NumberSpan></Button>
        <Button primaryOutline width="w-none">Piękna<NumberSpan margin="ml-2">34</NumberSpan></Button>
    </div>
</template>