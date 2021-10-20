<template>
    <div class="container mt-5 ">
        <template v-if="isLoading" class="bg-white">
				<div class="col-span-3">
					<Loading />
				</div>
        </template>
        <template v-else>
            <div class="grid grid-cols-8 gap-5">
                <div class="col-span-8 lg:col-start-1 lg:col-span-6 p-7 lg:p-10 bg-white  w-full h-full order-1 lg:order-none">
                    <BookCarousel :images="auction.images" />
                </div>
                <div class="col-span-8 lg:col-start-7 lg:col-span-2 order-3 lg:order-none bg-white">
                <UserDetails :user="auction.user" />
                </div>
                <div class="col-span-8 lg:col-span-6 p-5 order-2 lg:order-none bg-white">
                    <div class="flex flex-col lg:flex-row mb-5 lg:mb-2">
                        <div class="flex-grow">
                            <h2 class="text-3xl mb-3 uppercase">
                                {{ auction.book.title }}
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
                            Stan książki: {{ auction.book.book_condition }}
                        </span>
                        <span>
                            Data wydania: {{ auction.book.publish_date }}
                        </span>
                    </div>
                    <div class="flex">
                        {{ auction.book.description }}
                    </div>
                </div>
                <div>
                    
                </div>
                <div class="col-span-8 order-4 lg:order-none">
                    <div class=" bg-white p-5 lg:p-5 mb-5">
                        <h3 class="text-2xl">
                            Inne przedmioty sprzedającego <NumberSpan textSize="text-xl">5</NumberSpan> 
                        </h3>
                    </div>
                    <div class="bg-transparent lg:my-5">
                        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:m-0 ">
                            <Book v-for="book in books" :key="book.id" :book="book" />
                        </div> -->
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
	data() {
		return {
			auction: {},
            isLoading: false,
            auction_id: this.$route.params.id,
		}
	},
    
	beforeMount() {
		this.loadData();
	},
	methods: {
		loadData() {
			this.isLoading = !this.isLoading;
			this.$axios.get('/auctions/'+ this.auction_id)
			.then(response => {
				this.auction = response.data.data;
				this.isLoading = false;
			}).catch(error => {
				console.log(error);
			})
		}
	}

}
</script>
