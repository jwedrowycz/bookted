<template>
    <nav class="bg-purple-900 text-gray-200 py-9 top-0 z-10" id="navbar">
        <div class="container mx-auto">
            <div class="grid grid-cols-4 lg:grid-cols-6">
                <div class="flex col-span-2 lg:col-start-1 lg:col-span-2 align-middle text-center  ml-2">
                    <h2 class="text-2xl mr-10" id="logo">
                        <NuxtLink to="/">Bookted</NuxtLink>
                    </h2>
                </div>
                <div class="flex justify-end mt-1 col-span-2 lg:col-start-4 lg:col-span-4 ">
                    <div class="lg:flex hidden content-end">
                        <ul class="list-none lg:flex">
                            <li>
                                <button @click="showModal = true" class="ml-10 hover:text-gray-400 transition">Zaloguj</button>
                                <modal v-if="showModal" @closeModal="showModal = false" >
                                    <LoginForm @closeModal="showModal = false" />
                                </modal>
                            </li>
                            <li>
                                <NuxtLink :to="{name: 'auth-register'}" class="ml-10 hover:text-gray-400 transition">Zarejestruj</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex justify-end align-center lg:hidden mr-2">
                        <button @click="toggleNavbar">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div :class="{'hidden': isHidden}">
                 <ul class="list-none py-6 lg:hidden flex-column">
                        <li class="mb-5">
                            <a href="#">Link 1</a>
                        </li>
                        <li class="mb-5">
                            <a href="" class="">Link 2</a>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    data() {
        return {
            isHidden: true,
            showModal: false,
        }
    },
	mounted() {
		window.addEventListener("scroll", function() {
			var navbar = document.getElementById("navbar");
			navbar.classList.toggle("sticky", window.scrollY > 0);
		});
	},
    methods: {
        toggleNavbar() {
            this.isHidden = !this.isHidden;
        },
    }
}
</script>

<style>
#navbar {
	transition: all .25s;
}

.sticky {
	@apply text-purple-800 py-1 bg-white border-b-2 border-purple-800;
}

</style>