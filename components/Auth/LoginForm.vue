<template>
<div>
     <form class="flex flex-col mb-5 p-10 text-gray-900" @submit.prevent="handleSubmit">
        <h4 class="text-2xl text-center mb-3">Logowanie</h4>
        <div class="flex flex-col gap-3">
            <input autofocus class="bg-purple-100 border-none outline-none focus:border-purple-600 transition-all" type="text" v-model="form.login" placeholder="Nazwa użytkownika/email">
            <input class="bg-purple-100 border-none outline-none focus:border-purple-600 transition-all" type="password" v-model="form.password" placeholder="Hasło">
            <UtilityButton primary>
                    <div class="flex justify-center " v-if="loadingStatus">
                        <UtilityLoadingSpinner />
                    </div>
                    <div v-else>
                        Zaloguj!
                    </div>
            </UtilityButton>
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
import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        form: {
            login: '',
            password: '',
        },
        errors: [],
    }),
     computed: {
      ...mapGetters({
            loadingStatus: 'auth/loadingStatus',
      })
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),

        async handleSubmit () {
            await this.signIn(this.form);
            
        }
    }
}
</script>