<template>
<div>
     <form class="flex flex-col mb-5" @submit.prevent="handleLogin">
        <h4 class="text-2xl text-center mb-3">Logowanie</h4>
        <div class="flex flex-col gap-3">
            <input class="bg-purple-100 border-none outline-none focus:border-purple-600 transition-all" type="text" placeholder="Nazwa użytkownika/email">
            <input class="bg-purple-100 border-none outline-none focus:border-purple-600 transition-all" type="password" placeholder="Hasło">
            <Button primary>Zaloguj!</Button>
            <small class="text-gray-600">
                Nie masz jeszcze konta?
                 <span class="text-purple-600 hover:text-purple-900 transition-all">
                    <NuxtLink :to="{name: 'auth-register'}" v-on:click.native="$emit('closeModal')">Dołącz do nas!</NuxtLink>
                </span>
            </small>
        </div>
    </form>
</div>
</template>

<script>
export default {
    methods: {
        handleLogin() {
            this.$emit('closeModal');
        }
        
    }
}
</script>