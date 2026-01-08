import { PersonalProjectsType } from '../components/projectCarousel'

export const personalProjects: PersonalProjectsType[] = [
  {
    id: 0,
    title: 'DTMONEY',
    description:
      'Aplicação de controle financeiro com funcionalidades de cadastro de receitas e despesas. Utiliza MirageJS para simular uma API REST, permitindo o consumo e manipulação de dados como em um ambiente real de produção.',
    img: '/src/assets/img_dtmoney.svg',
    colorBorder: '#8F01C2',
  },
  {
    id: 1,
    title: 'API RICK AND MORTY',
    description:
      'Integração com API pública do Rick and Morty para exibição dinâmica de informações dos personagens, incluindo nome, espécie, status e localizações, com foco em experiência do usuário e manipulação de dados via JavaScript/React.',
    img: '/src/assets/image 3.svg',
    colorBorder: '#69CC58',
  },
  {
    id: 2,
    title: 'MY TO DO LIST',
    description:
      'My To Do List é uma aplicação simples de gerenciamento de tarefas, desenvolvida para praticar a integração entre front-end e back-end, consumo de API REST com Node.js e persistência de dados no Firebase, com foco em organização e boas práticas de desenvolvimento.',
    img: '/src/assets/image 17.svg',
    colorBorder: '#0500FF',
  },
]
