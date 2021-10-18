<template>
	<div>
		<div class="w-full bg-white">
			<h3 class="text-2xl my-5 p-3">
				Kategorie literatury
			</h3>
		</div>
		<CategoryList />
		<div class="w-full bg-white">
			<h3 class="text-2xl my-5 p-3">
				Ostatnio dodane
			</h3>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:m-0 ">
			<template v-if="isLoading">
				<div class="col-span-3">
					<Loading />
				</div>
			</template>
			<template v-else>
				<Book v-for="auction in auctions" :key="auction.id" :auction="auction" />
			</template>
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			auctions: {},
			isLoading: false,
		}
	},
	mounted() {
		this.loadData();
	},
	methods: {
		loadData() {
			this.isLoading = !this.isLoading;
			this.$axios.get('/auctions')
			.then(response => {
				this.auctions = response.data.data;
				this.isLoading = false;
			}).catch(error => {
				console.log(error);
			})
		}
	}

}
</script>
