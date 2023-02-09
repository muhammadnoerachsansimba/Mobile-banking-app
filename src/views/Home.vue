<script lang="ts" setup>
    import NavbarMenu from "@/components/NavbarMenu.vue"
    import Title from "@/components/Title.vue"
    import Card from "@/components/Card.vue"
    import History from "@/components/History.vue"
    import { AccountModel } from "@/models/AccountModel"
    import { TransactionModel } from "@/models/TransactionModel"
    import { Ref, ref } from "vue"

    let account: AccountModel = new AccountModel
    const transaction = new TransactionModel
    const data = ref()
    const transactions = ref()

    async function getAllData() {
        try {
            data.value = await account.getAll()
            transactions.value = await transaction.getAll()
        } catch(error) {
            console.log(error)
        }
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
                        <h1 class="text-xl cursor-default px-5 py-5 font-semibold">My Cards</h1>
                    </template>
                    <template v-slot:right-title>
                        <font-awesome-icon icon="fa-regular fa-bell" class="text-lg cursor-pointer px-5 py-5 font-semibold text-emerald-500" />
                    </template>
                </Title>
            </div>
        </header>

        <main class="mb-24">
            <div class="cards flex overflow-x-scroll scrollbar-hide scrollbar-none">
                <div v-for="value in data" :key="value.id">
                    <div class="Card mx-5">
                        <div class="Card flex justify-between px-5 py-5 w-96 h-52 max-h-52 rounded-lg" :class="value.color">
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
                <div>
                    <div class="Card mx-5">
                        <div class="Card flex justify-between px-5 py-5 w-96 h-52 max-h-52 rounded-lg bg-zinc-100 border-2 border-emerald-500 border-dashed">
                            <Card></Card>
                        </div>
                    </div>
                </div>
            </div>
    
            <div>
                <Title class="bg-zinc-100 rounded-lg mx-4 my-5">
                    <template v-slot:left-title>
                        <font-awesome-icon icon="fa-regular fa-credit-card" class="font-semibold text-xl text-[#34B688] py-6 px-4" />
                    </template>
    
                    <template v-slot:right-title>
                        <p class="px-5 py-2">
                            <span class="font-semibold text-md">Card has been ordered!</span><br>
                            <span class="text-xs">It will be posted to you within 7 business days.</span>
                        </p>
                    </template>
                </Title>
            </div>
    
            <div>
                <Title class="px-5 py-2">
                    <template v-slot:left-title>
                        <p class="font-semibold text-md py-1.5">Recent transactions</p>
                    </template>
        
                    <template v-slot:right-title>
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="font-thin text-xs bg-zinc-100 px-3 py-3 rounded-full text-zinc-600" />
                    </template>
                </Title>
            </div>

            <div class="history">
                <div>
                    <Title class="px-5">
                        <template v-slot:left-title>
                            <p class="font-semibold text-md py-1.5 text-zinc-400">Today</p>
                        </template>
                    </Title>
    
                    <History v-for="trans in transactions" :key="trans.id">
                        <template v-slot:history-detail>
                            <div class="w-12 h-12 overflow-hidden rounded-full bg-zinc-300">
                            </div>
    
                            <p class="ml-5">
                                <span class="font-medium">{{trans.recipient_name}}</span><br>
                                <span class="font-light text-sm text-zinc-500"> - </span>
                            </p>
                        </template>
    
                        <template v-slot:history-nominal>
                            <p class="font-medium text-xl py-2">-${{ new Intl.NumberFormat().format(trans.payment) }}</p>
                        </template>
                    </History>
                </div>
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