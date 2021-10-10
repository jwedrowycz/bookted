<template>
    <div class="grid grid-cols-6 mx-auto mt-28">
        <div class="col-span-6 lg:col-start-3 lg:col-span-2 w-full bg-white">
            <form class="flex flex-col gap-5 p-5">
                <h3 class="text-3xl">
                    Rejestracja
                </h3>
                <input type="text" class="bg-purple-100 border-none w-full focus:ring-0" placeholder="Imię i nazwisko">
                <input type="text" class="bg-purple-100 border-none w-full focus:ring-0" placeholder="Nazwa użytkownika">
                <input type="text" class="bg-purple-100 border-none w-full focus:ring-0" placeholder="Adres email">
                <input type="text" class="bg-purple-100 border-none w-full focus:ring-0" placeholder="Hasło">
                <input type="text" class="bg-purple-100 border-none w-full focus:ring-0" placeholder="Powtórz hasło">
                <Button primary>Zarejestruj!</Button>
                <span class="text-sm">Rejestracja oznacza, że zapoznałeś i akceptujesz <span class="text-purple-600">regulamin serwisu</span>, <span class="text-purple-600">politykę prywatności</span> i masz ukończone 18 lat.</span>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>