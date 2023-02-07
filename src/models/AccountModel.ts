import axios from 'axios'

export class AccountModel{
    async getAll() {
        try {
            const response = await axios.get("http://localhost:4500/getall_account")
            return response.data
        } catch(error) {
            console.log(error)
        }
    }
    
    async createAccount(data: any) {
        let formData: FormData = new FormData

        let dataAccount: any = {
            id_card: data.target.id_card.value,
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