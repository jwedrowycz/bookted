<template>
    <div class="flex flex-col p-5 h-full">
        <div class="flex justify-center mb-2">
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" class="rounded-full h-36 w-36 object-cover">
        </div>
        <div class="text-center text-2xl mb-5 font-bold">
            {{ user.username }}
        </div>
        <div class="text-gray-600 text-center mb-3">
            Użytkownik na <span class="font-semibold text-purple-600">bookted</span> od {{ user.created_at }}
        </div>
        <div class="flex justify-between gap-5  mb-5">
            <UtilityButtonLink :url="{ name: 'profile-conversations-id', params: { id: '1234' }}" primary paddingX="px-2">
                Spytaj o książkę
            </UtilityButtonLink>
            <UtilityButton secondary>
                Obserwuj
            </UtilityButton>
        </div>
        <div class="flex flex-col gap-3">
            <span class="text-gray-600 text-sm">Ostatnio zalogowany: {{ user.last_login_at }}</span>
            <span class="text-gray-600">Płock, mazowieckie</span>
            <span class="text-gray-600">Obserwujących <UtilityNumberSpan>23</UtilityNumberSpan></span>
            <span class="text-gray-600">Obserwuje <UtilityNumberSpan>4</UtilityNumberSpan></span>
            <div class="flex flex-col text-center mt-5 mb-5">
                <span class="text-gray-900 text-lg">Ocena użytkownika </span>
                <div class="flex align-baseline justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="rgba(124, 58, 237)" viewBox="0 0 24 24" stroke="rgba(124, 58, 237)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span class="text-xl ml-2">5</span>
                    <span class="text-gray-600 ml-1">(12)</span>
                </div>
            </div>
        </div>
         <div class="flex mb-0 my-auto">
            <UtilityButton primary>Zobacz profil</UtilityButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
        }
    },
    data() {
        return {

        }
    },
    methods: {
        loadUserDetails() {

        }
    }
}
</script>