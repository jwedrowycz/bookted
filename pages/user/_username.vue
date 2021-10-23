<template>
<div>
    <div class="grid grid-cols-8 mt-5">
        <div class="flex lg:flex-row flex-col col-span-8 lg:col-span-4 bg-white p-5">
            <div class="flex p-5 mr-5 lg:w-1/3 justify-center">
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" class="rounded-full h-36 w-36 object-cover">
            </div>
            <div class="flex-col w-full">
                <div class="flex flex-col mb-2 gap-1">
                    <div class="flex justify-between">
                        <span class="text-2xl w-full">Jane Doe</span>
                        <div class="flex align-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="rgba(124, 58, 237)" viewBox="0 0 24 24" stroke="rgba(124, 58, 237)">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span class="text-xl ml-2">5</span>
                        </div>
                    </div>
                    <span class="text-gray-500 text-sm">O mnie</span>
                    <span class="text-gray-600 mb-2">Płock, mazowieckie</span>
                    <div class="flex gap-x-2 mb-2">
                        <span class="text-gray-600">Obserwujących <NumberSpan>23</NumberSpan></span>
                        <span class="text-gray-600">Obserwuje <NumberSpan>4</NumberSpan></span>
                    </div>
                    <div class="text-gray-600 mb-3 text-sm flex flex-col">
                        <span>Użytkownik na <span class="font-semibold text-purple-600">bookted</span> od 02 paź 2021</span>
                        <span class="text-gray-600 text-sm">Ostatnio zalogowany(a): 25 minut temu</span>
                    </div>
                </div>
                
                <div class="flex gap-5 mb-5">
                    <Button secondary>                                                                                                                                                              
                        Obserwuj
                    </Button>
                    <Button primary>
                        Napisz wiadomość
                    </Button>
                </div>
            </div>
        </div>
    </div>                          
    <div class="w-full bg-white">
    <h3 class="text-2xl my-5 p-3">
        Aukcje użytkownika <NumberSpan>23</NumberSpan>
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