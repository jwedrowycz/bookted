<template>
	<div>
        <h3 class="text-2xl my-5">
            Ostatnio dodane
        </h3>
		<div class="flex flex-wrap gap-10 justify-between lg:m-0">
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
