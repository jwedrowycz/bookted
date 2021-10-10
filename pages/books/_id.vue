<template>
    <div class="container mt-5 ">
        <div class="grid grid-cols-6 gap-5">
            <div class="col-span-6 lg:col-start-1 lg:col-span-4 p-7 lg:p-10 bg-white  w-full h-full">
                <BookCarousel />
            </div>
            <div class="col-span-6 lg:col-start-5 lg:col-span-2 bg-white">
               <UserDetails />
            </div>
            <div class="col-span-6 lg:col-span-4 bg-white p-5">
                <div class="flex flex-col lg:flex-row mb-5 lg:mb-2">
                    <div class="flex-grow">
                        <h2 class="text-3xl mb-3">
                            THE MAN WHO DIED TWICE 
                        </h2>
                    </div>
                    <div>
                        <Button primary>
                            Kup książkę!
                        </Button>
                    </div>
                </div>
                <div class="flex flex-col text-gray-600 text-sm mb-5 lg:mb-3">
                    <span>
                        Stan książki: bardzo dobry
                    </span>
                    <span>
                        Data wydania: 2005
                    </span>
                </div>
                <div class="flex">
                    Morbi placerat purus ligula.<br>
                    Nulla facilisi. Nulla facilisi. <br>
                    Donec magna augue, tristique ut massa quis, ullamcorper congue metus. Donec facilisis eros arcu, posuere euismod felis efficitur ac. Nulla eleifend fermentum erat, at finibus augue imperdiet eu. Nulla non nisl vitae neque ultrices ornare sit amet eu libero. Aliquam condimentum sodales lectus ac venenatis. Sed egestas viverra risus, ac aliquet ante aliquam vel. 
                </div>
            </div>
            <div class="col-span-6 bg-white p-5 lg:p-5">
                <h3 class="text-2xl">
                    Inne przedmioty sprzedającego <div class="inline-block rounded-full bg-purple-600 px-2 text-white text-xl">5</div>
                </h3>
            </div>
            <div class="col-span-6 bg-transparent lg:py-3">
                 <div class="flex flex-wrap gap-10 justify-between lg:m-0">
                    <Book v-for="book in books" :key="book.id" :book="book" />
                </div>
            </div>
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
