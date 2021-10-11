<template>
	<div>
		<div class="w-full bg-white">
			<h3 class="text-2xl my-5 p-3">
				Kategorie literatury
			</h3>
		</div>
		<div class="flex flex-wrap gap-5 lg:m-0">
			<Button primaryOutline width="w-none">Kryminał</Button>
			<Button primaryOutline width="w-none">Thriller</Button>
			<Button primaryOutline width="w-none">Popularnonaukowa</Button>
			<Button primaryOutline width="w-none">Obyczajowa</Button>
			<Button primaryOutline width="w-none">Kryminał</Button>
			<Button primaryOutline width="w-none">Piękna</Button>
		</div>
		<div class="w-full bg-white">
			<h3 class="text-2xl my-5 p-3">
				Ostatnio dodane
			</h3>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:m-0 ">
			<Book v-for="book in books" :key="book.id" :book="book" />
		</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			books: {}
		}
	},
	mounted() {
		this.loadData();
	},
	methods: {
		loadData() {
			axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sbXX8wsCr5lHgDZ0fGSfNx9IA9BTRvkk')
			.then(response => {
				this.books = response.data.results.books;
			}).catch(error => {
				console.log(error);
			})
		}
	}

}
</script>
