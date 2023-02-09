import axios from 'axios'

export class AccountModel {
    async getAll() {
        try {
            const response = await axios.get("http://localhost:4500/getall_account")
            return response.data
        } catch(error) {
            console.log(error)
        }
    }

    async getById(id: string) {
        try {
            const response = await axios.get(`http://localhost:4500/get_account/${id}`)
            return response.data
        } catch(error) {
            console.log(error)
        }
    }
    
    async createAccount(data: any) {
        const formData: FormData = new FormData
        let card_name: string
        let color: string

        if(data.target.id_card.value == '1') {
            card_name = "Standard"
            color = "bg-gradient-to-tl from-[#F3D5A3] via-[#D5A3F3] to-[#D5A3F3] text-white border-none"
        } else if(data.target.id_card.value == '2') {
            card_name = "Space grey"
            color = "bg-gradient-to-bl from-[#3D3D3D] via-[#555555] to-[#9E9E9E] text-white border-none"
        } else {
            card_name = "Ultra green"
            color = "bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 text-white border-none"
        }

        let dataAccount = {
            id_card: data.target.id_card.value,
            card_name: card_name,
            name: data.target.name.value,
            birthplace: data.target.birthplace.value,
            birth_date: data.target.birth_date.value,
            gender: data.target.gender.value,
            phone: data.target.phone.value,
            email: data.target.email.value,
            username: data.target.username.value,
            password: data.target.password.value,
            card_type: data.target.card_type.value,
            payment_system: data.target.payment_system.value,
            color: color,
            created_at: new Date()
        }
        let accountData = JSON.stringify(dataAccount)
        formData.append('data', accountData)
        try {
            const response = await axios.post("http://localhost:4500/create_account", formData)
            window.location.href = "/"
        } catch(error) {
            console.log(error)
        }

    }
}