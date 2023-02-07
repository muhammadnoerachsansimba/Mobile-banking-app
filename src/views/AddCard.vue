<script setup lang="ts">
    import Card from "@/components/Card.vue"
    import Title from "@/components/Title.vue"
    import { Ref, ref } from "vue";

    const choose: Ref<string> = ref('Standard')
    const cardType: any = ref([])
    const response: any = ref({
        "id": 1,
        "type": "",
        "name": "Standard",
        "color": "bg-gradient-to-tl from-[#F3D5A3] via-[#D5A3F3] to-[#D5A3F3] text-white border-none",
        "image": "./src/assets/img/card_logo/master_card.png",
        "description": "Some card's description: for whom and for which purposes(max 2 rows)"
    })

    async function changeColor(color: string) {
        choose.value = color
        if(choose.value == "Space grey") {
            cardType.value = []
            cardType.value.push({
                "id": 2,
                "type": "Platinum - ",
                "name": "Space grey",
                "color": "bg-gradient-to-bl from-[#3D3D3D] via-[#555555] to-[#9E9E9E] text-white border-none",
                "image": "./src/assets/img/card_logo/master_card.png",
                "description" : "Some card's description: for whom and for which purpose (max 2 rows)"
            })
            response.value = cardType.value[0]
        } else if(choose.value == "Ultra green") {
            cardType.value = []
            cardType.value.push({
                "id": 3,
                "type": "",
                "name": "Ultra green",
                "color": "bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 text-white border-none",
                "image": "./src/assets/img/card_logo/master_card.png",
                "description" : "Some card's description: for whom and for which purpose (max 2 rows)"
            })
            response.value = cardType.value[0]
        } else {
            cardType.value = []
            cardType.value.push({
                "id": 1,
                "type": "",
                "name": "Standard",
                "color": "bg-gradient-to-tl from-[#F3D5A3] via-[#D5A3F3] to-[#D5A3F3] text-white border-none",
                "image": "./src/assets/img/card_logo/master_card.png",
                "description" : "Some card's description: for whom and for which purpose (max 2 rows)"
            })
            response.value = cardType.value[0]
        }
    }
</script>

<template>
    <div>
        <header>
            <div>
                <Title>
                    <template v-slot:left-title>
                        <router-link to="/">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-xl cursor-default px-5 py-5 font-semibold" />
                        </router-link>
                    </template>
                </Title>
            </div>
        </header>

        <div class="mx-auto my-16 rotate-90">
            <div class="mx-5">
                <div class="flex justify-between px-5 py-5 w-[22rem] h-56 rounded-lg" :class="response.color">
                    <Card>
                        <template v-slot:card-header>
                            <Title>
                                <template v-slot:left-title>
                                    {{ response.name }}
                                </template>
                                <template v-slot:right-title></template>
                            </Title>
                        </template>

                        <template v-slot:card-body>
                            <Title>
                                <template v-slot:left-title></template>
                                <template v-slot:right-title></template>
                            </Title>
                        </template>

                        <template v-slot:card-footer>
                            <Title>
                                <template v-slot:left-title>
                                    <h1></h1>
                                </template>
                                <template v-slot:right-title>
                                    <img :src="response.image" alt="" :class="response != 'none' ? 'w-11 h-fit' : ''">
                                </template>
                            </Title>
                        </template>
                    </Card>
                </div>
            </div>
        </div>

        <div class="text-center pt-10 px-5">
            <p class="font-bold text-lg" v-if="response.type != ''">{{ response.type + response.name }}</p>
            <p class="font-bold text-lg" v-else>{{ response.name }}</p>
            <p class="mt-3">{{ response.description }}</p>
        </div>

        <div class="flex justify-center space-x-7 mt-9 px-5">
            <button class="w-9 h-9 bg-[#3D3D3D] rounded-full" @click="changeColor('Space grey')" :class="choose == 'Space grey' ? ' outline outline-green-600' : ''"></button>
            <button class="w-9 h-9 bg-[#196249] rounded-full" @click="changeColor('Ultra green')" :class="choose == 'Ultra green' ? ' outline outline-green-600' : ''"></button>
            <button class="w-9 h-9 bg-[#F3D6A2] rounded-full" @click="changeColor('Standard')" :class="choose == 'Standard' ? ' outline outline-green-600' : ''"></button>
        </div>

        <div class="px-5 pt-12 pb-5">
            <router-link :to="'/create_account/'+response.id">
                <button class="bg-green-700 text-white py-2 w-full rounded-xl">
                    Get for free
                </button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
</style>