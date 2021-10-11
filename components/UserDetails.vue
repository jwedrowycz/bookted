<template>
    <div class="flex flex-col p-5">
        <div class="flex justify-center mb-2">
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" class="rounded-full h-36 w-36 object-cover">
        </div>
        <div class="text-center text-2xl mb-5 font-bold">
            Jane Doe
        </div>
        <div class="text-gray-600 text-center mb-3">
            Użytkownik na <span class="font-semibold text-purple-600">bookted</span> od 02 paź 2021
        </div>
        <div class="flex justify-between gap-5  mb-5">
            <Button primary>
                Spytaj o książkę
            </Button>
            <Button secondary>
                Obserwuj
            </Button>
        </div>
        <div class="flex flex-col gap-3">
            <span class="text-gray-600 text-sm">Ostatnio zalogowany: 25 minut temu</span>
            <span class="text-gray-600">Płock, mazowieckie</span>
            <span class="text-gray-600">Obserwujących <NumberSpan>23</NumberSpan></span>
            <span class="text-gray-600">Obserwuje <NumberSpan>4</NumberSpan></span>
        </div>
    </div>
</template>

<script>
export default {
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