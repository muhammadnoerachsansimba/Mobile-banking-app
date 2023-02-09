<script setup lang="ts">
    import NavbarMenu from '@/components/NavbarMenu.vue'
    import Title from "@/components/Title.vue"
    import Card from "@/components/Card.vue"
    import InputIcon from '@/components/InputIcon.vue'
    import { AccountModel } from "@/models/AccountModel"
    import { TransactionModel } from '@/models/TransactionModel'
    import { Ref, ref } from "vue"

    let account: AccountModel = new AccountModel
    let transaction: TransactionModel = new TransactionModel
    const data = ref()
    const id_card: Ref<number> = ref(0)
    const money: Ref<number> = ref(0)

    async function getAllData() {
        try {
            data.value = await account.getAll()
        } catch(error) {
            console.log(error)
        }
    }

    async function chooseCard(id: number, amount: number) {
        id_card.value = id
        money.value = amount
    }

    getAllData()
</script>

<template>
    <div>
        <nav>
            <div>
                <NavbarMenu />
            </div>
        </nav>

        <header>
            <div>
                <Title>
                    <template v-slot:left-title>
                    <router-link to="/">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-xl cursor-default px-5 py-5 font-semibold" />
                    </router-link>
                    </template>
                    <template v-slot:right-title>
                        <h1 class="text-xl cursor-default px-5 py-5 font-semibold">Send</h1>
                    </template>
                </Title>
            </div>
        </header>
        
        <main>
            <div class="cards flex overflow-x-scroll scrollbar-hide scrollbar-none">
                <div v-for="value in data" :key="value.id">
                    <div class="Card mx-5">
                        <div class="Card flex justify-between px-5 py-5 w-96 h-52 max-h-52 rounded-lg" :class="id_card == value.id ? 'border-2 border-zinc-300 bg-zinc-200' : value.color" @click="chooseCard(value.id, value.amount)">
                            <Card>
                                <template #card-header>
                                    <Title>
                                        <template #left-title>{{ value.card_name }}</template>

                                        <template #right-title>
                                            <router-link to="/">
                                                <font-awesome-icon icon="fa-solid fa-gear" class="bg-[#0000002c] text-sm rounded-full px-2 py-2" />
                                            </router-link>
                                        </template>
                                    </Title>
                                </template>

                                <template #card-body>
                                    <Title>
                                        <template #left-title>
                                            <p>
                                                <span class="font-extralight text-sm">Balance</span><br>
                                                <span class="font-medium text-2xl">${{ new Intl.NumberFormat().format(value.amount) }}</span>
                                            </p>
                                        </template>
                                    </Title>
                                </template>

                                <template #card-footer>
                                    <Title>
                                        <template #left-title>
                                            <p>
                                                <span class="font-extrabold text-lg tracking-[.35rem]">....</span>
                                                <span class="font-light">{{ value.phone.substring(value.phone.length - 4) }}</span>
                                            </p>
                                        </template>

                                        <template #right-title>
                                            <img src="@/assets/img/card_logo/master_card.png" alt="" class="w-11 h-fit" v-if="value.payment_system == 'Mastercard'">
                                            <img src="@/assets/img/card_logo/visa.png" alt="" class="w-11 h-fit" v-else-if="value.payment_system == 'VISA'">
                                            <img src="@/assets/img/card_logo/american_express.jpg" alt="" class="w-11 h-fit" v-else>
                                        </template>
                                    </Title>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form my-5 px-5">
                <form @submit.prevent="transaction.send" class="space-y-5">
                    <input type="hidden" name="id_card" id="id_card" :value="id_card">
                    <input type="hidden" name="amount" id="amount" :value="money">

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-credit-card" />
                        </template>

                        <template #form-input>
                            <input type="text" name="account_number" id="account_number" class="w-full focus:outline-none" placeholder="Enter account number...">
                        </template>
                    </InputIcon>
                    
                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-user" />
                        </template>

                        <template #form-input>
                            <input type="text" name="recipient_name" id="recipient_name" class="w-full focus:outline-none" placeholder="Enter recipient name...">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-money-bill" />
                        </template>

                        <template #form-input>
                            <input type="text" name="payment" id="payment" class="w-full focus:outline-none" placeholder="Enter delivery amount...">
                        </template>
                    </InputIcon>

                    <InputIcon>
                        <template #icon>
                            <font-awesome-icon icon="fa-solid fa-quote-left" />
                        </template>

                        <template #form-input>
                            <input type="text" name="description" id="description" class="w-full focus:outline-none" placeholder="Enter description...">
                        </template>
                    </InputIcon>

                    <div class="my-5">
                        <button type="submit" class="bg-green-600 text-white w-full py-2.5 rounded-lg">Send</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .scrollbar-none::-webkit-scrollbar {
        display: none;
    }

    .scrollbar-none {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none; 
    }
</style>