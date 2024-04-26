import Education from "./education"
import Languages from "./profileLanguage"
import Project from "./project"
import Skill from "./skill"

type Profile = {
    id: number
    name: string
    lastNameOne: string
    lastNametwo: string
    career: string
    birthDate: string
    email: string
    image: string
    phone: number
    address: string
    summary: string
    resume: string
    github: string
    linkedin: string
    projects: Project[]
    educations: Education[]
    skills: Skill[]
    languages: Languages[]
}

export default Profile