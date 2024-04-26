import Offer from "./offer"

type Company = {
    id: number
    name: string
    address: string
    image: string
    phone: string
    email: string
    description: string
    website: string
    password: string
    offers: Offer[]
}
export default Company