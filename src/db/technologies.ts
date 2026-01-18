import { TechnologiesTypes } from '../components/hardSkills'
import icTypeScript from '../assets/ic_typescript.svg'
import icJavaScript from '../assets/ic_javascript.svg'
import icReact from '../assets/ic_react.svg'
import icGithub from '../assets/ic_girhub_escuro.svg'
import icFigma from '../assets/ic_figma.svg'
import icPython from '../assets/ic_python.svg'
import icNode from '../assets/ic_node.svg'

const date = new Date()
const currentYear = date.getFullYear()

export const technologies: TechnologiesTypes[] = [
  {
    colorBg: '#3B37FF',
    id: '1',
    icon: icTypeScript,
    title: 'TypeScript',
    timeExperience: currentYear - 2024 + 1,
  },
  {
    colorBg: '#FFF848',
    id: '2',
    icon: icJavaScript,
    title: 'JavaScript',
    timeExperience: currentYear - 2023 + 1,
  },
  {
    colorBg: '#48D3FF',
    id: '3',
    icon: icReact,
    title: 'React',
    timeExperience: currentYear - 2024 + 1,
  },
  {
    colorBg: '#494949',
    id: '4',
    icon: icGithub,
    title: 'Github',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#EE0000',
    id: '5',
    icon: icFigma,
    title: 'Figma',
    timeExperience: currentYear - 2023 + 1,
  },
  {
    colorBg: '#FFF848',
    id: '6',
    icon: icPython,
    title: 'Python',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#62FF48',
    id: '7',
    icon: icNode,
    title: 'Node',
    timeExperience: currentYear - 2025 + 1,
  },
]
