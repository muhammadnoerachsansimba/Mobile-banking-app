<script lang="ts">
    import {ref, Ref} from "vue"

    export default {
        setup() {
            const url: unknown = window.location.href.split("/").pop()
            const active: Ref<string> = ref(`${url}`)
            console.log(active)

            return {
                active
            }
        }
    }
</script>

<template>
    <div class="NavbarMenu fixed flex justify-around bg-white w-full py-5 bottom-0 left-0 right-0 drop-shadow-[0_5px_5px_rgba(0,0,0,0.45)]">
        <div class="navbar-item text-center text-zinc-500" :class="active == '' ? 'text-green-600' : ''">
            <router-link to="/" @click="active = ''">
                <font-awesome-icon icon="fa-solid fa-house" />
                <p class="text-center">Home</p>
            </router-link>
        </div>

        <div class="navbar-item text-center text-zinc-500" :class="active == 'send' ? 'text-green-600' : ''">
            <router-link to="#" @click="active = 'send'">
                <font-awesome-icon icon="fa-solid fa-arrow-trend-up" />
                <p class="text-center">Send</p>
            </router-link>
        </div>

        <div class="navbar-item text-center text-zinc-500" :class="active == 'account' ? 'text-green-600' : ''">
            <router-link to="#" @click="active = 'account'">
                <font-awesome-icon icon="fa-regular fa-user" />
                <p class="text-center">Account</p>
            </router-link>
        </div>
    </div>
</template>

<style>

</style>