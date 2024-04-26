import Skills from "./offerSkill"

type Offer = {
    id: number
    job: string
    status: string
    createAt: string
    cpmpanyId: number
    description: string
    skills: Skills[]
}
export default Offer