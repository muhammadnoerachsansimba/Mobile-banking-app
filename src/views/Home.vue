<script setup lang="ts">
    import NavbarMenu from "../components/NavbarMenu.vue"
    import Title from "../components/Title.vue"
    import Card from "../components/Card.vue"
    import History from "../components/History.vue"
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
                        <font-awesome-icon icon="fa-regular fa-bell" class="text-lg cursor-pointer px-5 py-5 font-semibold" />
                    </template>
                </Title>
            </div>
        </header>

        <main class="mb-24">
            <div class="cards flex overflow-x-scroll scrollbar-hide">
                <div>
                    <Card>
                        <template v-slot:card-header>
                            <Title>
                                <template v-slot:left-title>
                                    <p class="text-md">Ultra green</p>
                                </template>
                                <template v-slot:right-title>
                                    <font-awesome-icon icon="fa-solid fa-gear" class="text-xs px-2 py-2 bg-[#ffffff4b] rounded-full hover:bg-[#ffffff7c] cursor-pointer" />
                                </template>
                            </Title>
                        </template>
            
                        <template v-slot:card-body>
                            <Title>
                                <template v-slot:left-title>
                                    <p>
                                        <span class="font-extralight text-sm">Balance</span><br>
                                        <span class="font-bold text-xl">$815,75</span>
                                    </p>
                                </template>
                            </Title>
                        </template>
            
                        <template v-slot:card-footer>
                            <Title>
                                <template v-slot:left-title>
                                    <p>
                                        <span class="font-extrabold text-lg tracking-[.15em]">....</span>
                                        <span class="font-light text-sm">4592</span>
                                    </p>
                                </template>
                                <template v-slot:right-title>
                                    <img src="../assets/img/card_logo/master_card.png" alt="master card logo" class="w-11 h-fit">
                                </template>
                            </Title>
                        </template>
                    </Card>
                </div>

                <div>
                    <Card>
                        <template v-slot:card-header>
                            <Title>
                                <template v-slot:left-title>
                                    <p class="text-md">Standard</p>
                                </template>
                                <template v-slot:right-title>
                                    <font-awesome-icon icon="fa-solid fa-gear" class="text-xs px-2 py-2 bg-[#ffffff4b] rounded-full hover:bg-[#ffffff7c] cursor-pointer" />
                                </template>
                            </Title>
                        </template>
            
                        <template v-slot:card-body>
                            <Title>
                                <template v-slot:left-title>
                                    <p>
                                        <span class="font-extralight text-sm">Balance</span><br>
                                        <span class="font-bold text-xl">$3500,75</span>
                                    </p>
                                </template>
                            </Title>
                        </template>
            
                        <template v-slot:card-footer>
                            <Title>
                                <template v-slot:left-title>
                                    <p>
                                        <span class="font-extrabold text-lg tracking-[.15em]">....</span>
                                        <span class="font-light text-sm">4290</span>
                                    </p>
                                </template>
                                <template v-slot:right-title>
                                    <img src="../assets/img/card_logo/visa.png" alt="visa card logo" class="w-11 h-fit">
                                </template>
                            </Title>
                        </template>
                    </Card>
                </div>

                <div>
                    <Card></Card>
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
    
                    <History>
                        <template v-slot:history-detail>
                            <div class="w-12 h-12 overflow-hidden rounded-full">
                                <img src="../assets/img/company_logo/starbucks.png" alt="Starbucks Logo">
                            </div>
    
                            <p class="ml-5">
                                <span class="font-medium">Starbucks</span><br>
                                <span class="font-light text-sm text-zinc-500">Restaurant</span>
                            </p>
                        </template>
    
                        <template v-slot:history-nominal>
                            <p class="font-medium text-xl py-2">-$6,30</p>
                        </template>
                    </History>
    
                    <History>
                        <template v-slot:history-detail>
                            <div class="w-12 h-12 overflow-hidden rounded-full">
                                <img src="../assets/img/company_logo/starbucks.png" alt="Starbucks Logo">
                            </div>
                            <p class="ml-5">
                                <span class="font-medium">Starbucks</span><br>
                                <span class="font-light text-sm text-zinc-500">Restaurant</span>
                            </p>
                        </template>
    
                        <template v-slot:history-nominal>
                            <p class="font-medium text-xl py-2">-$15,30</p>
                        </template>
                    </History>
                </div>
    
                <div>
                    <Title class="px-5">
                        <template v-slot:left-title>
                            <p class="font-semibold text-md py-1.5 text-zinc-400">Yesterday</p>
                        </template>
                    </Title>
    
                    <History>
                        <template v-slot:history-detail>
                            <div class="w-12 h-12 overflow-hidden rounded-full">
                                <img src="../assets/img/company_logo/morris.png" alt="Morris Logo">
                            </div>
    
                            <p class="ml-5">
                                <span class="font-medium">Morris</span><br>
                                <span class="font-light text-sm text-zinc-500">Dealer</span>
                            </p>
                        </template>
    
                        <template v-slot:history-nominal>
                            <p class="font-medium text-xl py-2">-$2000,30</p>
                        </template>
                    </History>
    
                    <History>
                        <template v-slot:history-detail>
                            <div class="w-12 h-12 overflow-hidden rounded-full">
                                <img src="../assets/img/company_logo/starbucks.png" alt="Starbucks Logo">
                            </div>
                            <p class="ml-5">
                                <span class="font-medium">Starbucks</span><br>
                                <span class="font-light text-sm text-zinc-500">Restaurant</span>
                            </p>
                        </template>
    
                        <template v-slot:history-nominal>
                            <p class="font-medium text-xl py-2">-$15,30</p>
                        </template>
                    </History>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
</style>