export interface CardDetail {
    id: number
    type: string
    name: "standard" | "premium"
    transition: {
        from: string
        to: string
        via: string
    }
    textColor: string
    color: string
    description: string
}