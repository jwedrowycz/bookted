<template>
    <div class="grid-cols-8 mt-5">
        <div class="flex flex-wrap gap-5 mb-5">
			<ButtonLink :url="{ name: 'books-category', params: { 'id': 3 }, query: {'category': 'Kryminał'}}" primaryOutline width="w-none">Kryminał<NumberSpan margin="ml-2">120</NumberSpan></ButtonLink>
			<Button primaryOutline width="w-none">Thriller<NumberSpan margin="ml-2">83</NumberSpan></Button>
			<Button primaryOutline width="w-none">Popularnonaukowa<NumberSpan margin="ml-2">23</NumberSpan></Button>
			<Button primaryOutline width="w-none">Obyczajowa<NumberSpan margin="ml-2">233</NumberSpan></Button>
			<Button primaryOutline width="w-none">Edukacyjna<NumberSpan margin="ml-2">0</NumberSpan></Button>
			<Button primaryOutline width="w-none">Piękna<NumberSpan margin="ml-2">34</NumberSpan></Button>
		</div>
        <div class="flex w-full bg-white mb-5">
            <h3 class="text-2xl p-3"> 
                Kryminał
            </h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:m-0 ">
			<template v-if="isLoading">
				<div class="col-span-3">
					<Loading />
				</div>
			</template>
			<template v-else>
				<Book v-for="book in books" :key="book.id" :book="book" />
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