<script setup lang="ts">
    
</script>

<template>
    <div class="NavbarMenu fixed flex justify-around bg-white w-full py-5 bottom-0 left-0 right-0 drop-shadow-[0_5px_5px_rgba(0,0,0,0.45)]">
        <div class="navbar-item text-center text-zinc-500">
            <router-link to="/">
                <font-awesome-icon icon="fa-solid fa-house" />
                <p class="text-center">Home</p>
            </router-link>
        </div>

        <div class="navbar-item text-center text-zinc-500">
            <router-link to="/send">
                <font-awesome-icon icon="fa-solid fa-arrow-trend-up" />
                <p class="text-center">Send</p>
            </router-link>
        </div>

        <div class="navbar-item text-center text-zinc-500">
            <router-link to="/card_detail">
                <font-awesome-icon icon="fa-regular fa-user" />
                <p class="text-center">Account</p>
            </router-link>
        </div>

    </div>
</template>

<style scoped>

.active {
    color: #16A34A;
}

</style>