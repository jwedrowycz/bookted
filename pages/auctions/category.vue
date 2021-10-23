<template>
    <div class="grid-cols-8 mt-5">
        <div class="flex flex-wrap gap-5 mb-5">
			<UtilityButtonLink :url="{ name: 'books-category', params: { 'id': 3 }, query: {'category': 'Kryminał'}}" primaryOutline width="w-none">Kryminał<UtilityNumberSpan margin="ml-2">120</UtilityNumberSpan></UtilityButtonLink>
			<UtilityButton primaryOutline width="w-none">Thriller<UtilityNumberSpan margin="ml-2">83</UtilityNumberSpan></UtilityButton>
			<UtilityButton primaryOutline width="w-none">Popularnonaukowa<UtilityNumberSpan margin="ml-2">23</UtilityNumberSpan></UtilityButton>
			<UtilityButton primaryOutline width="w-none">Obyczajowa<UtilityNumberSpan margin="ml-2">233</UtilityNumberSpan></UtilityButton>
			<UtilityButton primaryOutline width="w-none">Edukacyjna<UtilityNumberSpan margin="ml-2">0</UtilityNumberSpan></UtilityButton>
			<UtilityButton primaryOutline width="w-none">Piękna<UtilityNumberSpan margin="ml-2">34</UtilityNumberSpan></UtilityButton>
		</div>
        <div class="flex w-full bg-white mb-5">
            <h3 class="text-2xl p-3"> 
                Kryminał <UtilityNumberSpan>120</UtilityNumberSpan>
            </h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:m-0 ">
			<template v-if="isLoading">
				<div class="col-span-3">
					<UtilityLoading />
				</div>
			</template>
			<template v-else>
				<UtilityBook v-for="book in books" :key="book.id" :book="book" />
			</template>
		</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			books: {},
			isLoading: false,
		}
	},
	mounted() {
		this.loadData();
	},
	methods: {
		loadData() {
			this.isLoading = !this.isLoading;
			axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sbXX8wsCr5lHgDZ0fGSfNx9IA9BTRvkk')
			.then(response => {
				this.books = response.data.results.books;
				this.isLoading = false;
			}).catch(error => {
				console.log(error);
			})
		}
	}

}
</script>