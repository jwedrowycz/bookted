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
			<template v-if="loading">
				<div class="col-span-3">
					<UtilityLoading />
				</div>
			</template>
			<template v-else>
				<AuctionBook v-for="auction in recentAuctions.data" :key="auction.id" :auction="auction" />
			</template>
		</div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
	data() {
		return {

		}
	},
	computed: {
		...mapGetters({
			recentAuctions: 'auction/recentAuctions',
            loading: 'auction/loading'

		})
	},
	mounted() {
		this.loadAuctions();
	},
	methods: {
		...mapActions({
			loadAuctions: 'auction/loadAuctions'
		})
	}

}
</script>
