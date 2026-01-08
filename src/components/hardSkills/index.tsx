import { Container, ContainerTechnologies, ContentTecnologies } from './styles'

export interface TechnologiesTypes {
  readonly id: string
  readonly icon: string
  readonly title: string
  readonly colorBg: string
  readonly timeExperience: number
}
interface TechnologiesPropos {
  readonly technology: TechnologiesTypes
}

export default function HardSkills({ technology }: TechnologiesPropos) {
  return (
    <Container className="max-width-global">
      <ContainerTechnologies colorBg={technology.colorBg}>
        <img src={technology.icon} alt="" width={20} height={20} />
      </ContainerTechnologies>
      <ContentTecnologies>
        <p>{technology.title}</p>
        <p>Exp. {technology.timeExperience} anos</p>
      </ContentTecnologies>
    </Container>
  )
}
