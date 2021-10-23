<template>
    <div class="flex flex-wrap gap-5 lg:m-0">
        <UtilityButtonLink :url="{ name: 'books-category', params: { 'id': 3 }, query: {'category': 'Kryminał'}}" primaryOutline width="w-none">Kryminał<UtilityNumberSpan margin="ml-2">120</UtilityNumberSpan></UtilityButtonLink>
        <UtilityButton primaryOutline width="w-none">Thriller<UtilityNumberSpan margin="ml-2">83</UtilityNumberSpan></UtilityButton>
        <UtilityButton primaryOutline width="w-none">Popularnonaukowa<UtilityNumberSpan margin="ml-2">23</UtilityNumberSpan></UtilityButton>
        <UtilityButton primaryOutline width="w-none">Obyczajowa<UtilityNumberSpan margin="ml-2">233</UtilityNumberSpan></UtilityButton>
        <UtilityButton primaryOutline width="w-none">Edukacyjna<UtilityNumberSpan margin="ml-2">0</UtilityNumberSpan></UtilityButton>
        <UtilityButton primaryOutline width="w-none">Piękna<UtilityNumberSpan margin="ml-2">34</UtilityNumberSpan></UtilityButton>
    </div>
</template>