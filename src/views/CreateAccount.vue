<script setup lang="ts">
    import Title from "@/components/Title.vue"
    import InputIcon from "@/components/InputIcon.vue"
    import {Ref, ref} from "vue"
    import { AccountModel } from "@/models/AccountModel"
    import { useRoute } from "vue-router"

    const account = new AccountModel()
    const route = useRoute()
    let id = route.params.id

    const cardType: Ref<string> = ref("")
    const paymentSystem: Ref<string> = ref("")
    
    async function chooseCardType(type: string) {
        cardType.value = type
    }

    async function choosePaymentSystem(payment: string) {
        paymentSystem.value = payment
    }
</script>

<template>
    <div>
        <header>
            <div class="px-5 py-5">
                <Title>
                    <template #left-title>
                        <router-link to="/add_card">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl cursor-default font-semibold"  />
                        </router-link>
                    </template>
                </Title>
            </div>
        </header>

        <main>
            <form @submit.prevent="account.createAccount">
                <input type="hidden" name="id_card" :value="id">
                <div class="px-5 py-2 space-y-5">
                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-address-card" />
                        </template>
                        <template #form-input>
                            <input type="text" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" name="name" placeholder="Enter full name...">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </template>
                        <template #form-input>
                            <input type="text" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" name="birthplace" placeholder="Enter birthplace...">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </template>
                        <template #form-input>
                            <input type="date" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" name="birth_date">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-venus-mars" />
                        </template>
                        <template #form-input>
                            <select class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" name="gender">
                                <option value="">-- Choose Gender --</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-phone" />
                        </template>
                        <template #form-input>
                            <input type="text" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" placeholder="Enter number phone (exp: +6282271156595)..." name="phone">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                        </template>
                        <template #form-input>
                            <input type="email" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" placeholder="Enter email..." name="email">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-user" />
                        </template>
                        <template #form-input>
                            <input type="text" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" placeholder="Enter username..." name="username">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-lock" />
                        </template>
                        <template #form-input>
                            <input type="password" name="password" class="w-full focus:outline-none placeholder:text-zinc-500 text-zinc-700" placeholder="Enter password...">
                        </template>
                    </InputIcon>

                    <div class="flex flex-col mb-5">
                        <div class="title mb-2">
                            <h1 class="text-zinc-600">Card Type :</h1>
                        </div>

                        <div class="flex justify-between space-x-4">
                            <div class="border card-type border-zinc-500 w-full text-center py-3 rounded-lg hover:border-emerald-600 hover:drop-shadow-lg hover:bg-zinc-100" @click="chooseCardType('Credit')" :class="cardType == 'Credit' ? 'choose' : ''">
                                Credit Card
                            </div>
                            <div class="border card-type border-zinc-500 w-full text-center py-3 rounded-lg hover:border-emerald-600 hover:drop-shadow-lg hover:bg-zinc-100" @click="chooseCardType('Debit')" :class="cardType == 'Debit' ? 'choose' : ''">
                                Debit Card
                            </div>
                            <input type="hidden" name="card_type" :value="cardType">
                        </div>
                    </div>

                    <div class="flex flex-col mb-5">
                        <div class="title mb-2">
                            <h1 class="text-zinc-600">Payment System :</h1>
                        </div>

                        <div class="flex justify-between space-x-1">
                            <div class="border border-zinc-500 w-full text-center py-3 rounded-lg hover:border-emerald-600 drop-shadow-lg hover:bg-zinc-100 max-h-44 overflow-hidden" @click="choosePaymentSystem('VISA')" :class="paymentSystem == 'VISA' ? 'choose' : ''">
                                <img src="@/assets/img/card_logo/visa.png" alt="" class="mx-auto w-24 py-3 mt-2">
                                <p class="text-xs">VISA</p>
                            </div>
                            <div class="border border-zinc-500 w-full text-center py-3 rounded-lg hover:border-emerald-600 drop-shadow-lg hover:bg-zinc-100 max-h-44 overflow-hidden" @click="choosePaymentSystem('Mastercard')" :class="paymentSystem == 'Mastercard' ? 'choose' : ''">
                                <img src="@/assets/img/card_logo/master_card.png" alt="" class="mx-auto w-20 py-2">
                                <p class="text-xs">Mastercard</p>
                            </div>
                            <div class="border border-zinc-500 w-full text-center py-3 rounded-lg hover:border-emerald-600 drop-shadow-lg hover:bg-zinc-100 max-h-44 overflow-hidden" @click="choosePaymentSystem('American Express')" :class="paymentSystem == 'American Express' ? 'choose' : ''">
                                <img src="@/assets/img/card_logo/american_express.jpg" alt="" class="mx-auto w-14 py-2">
                                <p class="text-xs">American Express</p>
                            </div>
                            <input type="hidden" name="payment_system" id="payment_system" :value="paymentSystem">
                        </div>
                    </div>

                    <div class="py-5">
                        <button type="submit" class="bg-green-700 w-full py-2 rounded-lg text-white hover:bg-green-500">Create account</button>
                    </div>
                </div>
            </form>
        </main>
    </div>
</template>

<style scoped>
    .choose {
        background-color: rgb(244, 244, 245);
        border-color: rgb(5, 150, 105);
        box-shadow: 0px 10px 80x rgba(0,0,0,.1);
    }
</style>