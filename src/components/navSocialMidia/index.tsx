import icLinkedinImg from '../../assets/ic_linkedin.svg'
import icGithubImg from '../../assets/ic_github_claro.svg'
import icCvImg from '../../assets/ic_cv.svg'
import { ButtonContactPortfolio, Nav } from './styles'

export default function NavSocialMidia() {
  return (
    <Nav>
      <ul>
        <li>
          <ButtonContactPortfolio>
            <img src={icLinkedinImg} alt="Icon LinkedIn" width={'16px'} />
            <a
              href="https://www.linkedin.com/in/fernanda-mendon%C3%A7a-6012a71b2/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </ButtonContactPortfolio>
        </li>
        <li>
          <ButtonContactPortfolio>
            <img src={icGithubImg} alt="Icon GitHub" width={'16px'} />
            <a
              href="https://github.com/Fernandamendonc"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </ButtonContactPortfolio>
        </li>
        <li>
          <ButtonContactPortfolio>
            <img src={icCvImg} alt="Icon CV" width={'16px'} />
            <a
              href="src/assets/files/Fernanda Mendonça - CV Novo.pdf"
              target="_blank"
            >
              CV
            </a>
          </ButtonContactPortfolio>
        </li>
      </ul>
    </Nav>
  )
}
