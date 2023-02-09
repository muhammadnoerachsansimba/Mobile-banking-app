import axios from 'axios'

export class TransactionModel {
    async getAll() {
        try {
            const response = await axios.get("http://localhost:4500/getall_transaction")
            return response.data
        } catch(error) {
            console.log(error)
        }
    }

    async send(data: any) {
        const formData: FormData = new FormData
        let transfer_amount: number = 0
        let amount_funds: number = 0
        let id_account: number = 0
        let total_funds: number = 0
        
        transfer_amount = data.target.payment.value
        amount_funds = data.target.amount.value
        id_account = data.target.id_card.value
        total_funds = amount_funds - transfer_amount

        let send = {
            id_card: id_account,
            account_number: data.target.account_number.value,
            recipient_name: data.target.recipient_name.value,
            payment: transfer_amount,
            description: data.target.description.value,
            created_at: new Date()
        }

        let card = {
            amount: total_funds,
            updated_at: new Date()
        }

        let dataSend = JSON.stringify(send)
        let dataCard = JSON.stringify(card)
        formData.append("data", dataSend)
        formData.append("dataCard", dataCard)
        if(amount_funds > 0) {
            if(amount_funds < transfer_amount) {
                alert("Sorry, your funds are not enough")
            } else {
                try {
                    await axios.post("http://localhost:4500/send", formData)
                    await axios.put(`http://localhost:4500/edit_account/${id_account}`, formData)
                    window.location.href ="/"
                } catch(error) {
                    console.log(error)
                }
            }
        } else {
            alert("Sorry, you don't have funds")
        }
    }
}