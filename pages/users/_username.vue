<template>
    <div class="grid grid-cols-8 mt-5">
        <div class="flex lg:flex-row flex-col col-span-8 lg:col-span-4 bg-white p-5">
            <div class="flex p-5 mr-5 lg:w-1/3 justify-center">
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" class="rounded-full h-36 w-36 object-cover">
            </div>
            <div class="flex-col w-full">
                <div class="flex flex-col mb-2">
                    <span class="text-2xl w-full">Jane Doe</span>
                    <span class="text-gray-600 mb-2">Płock, mazowieckie</span>
                    <span class="text-gray-600 text-sm">Ostatnio zalogowany(a): 25 minut temu</span>
                </div>
                <div class="text-gray-600 mb-3 text-sm">
                    Użytkownik na <span class="font-semibold text-purple-600">bookted</span> od 02 paź 2021
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
</template>