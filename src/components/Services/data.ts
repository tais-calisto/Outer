import backupIMG from '../../assets/illustrations/backup.svg'
import moreIMG from '../../assets/illustrations/more.svg'
import serverIMG from '../../assets/illustrations/server.svg'
import privacyIMG from '../../assets/illustrations/privacy.svg'

export const services = [
  {
    order: 1,
    title: 'Backup em nuvem: Segurança avançada para seus dados',
    text: 'Com a Criptografia de ponta a ponta os dados de sua empresa estarão sempre em segurança.',
    btn01: 'Solicite um orçamento',
    btn02: 'Saiba mais',
    image: backupIMG,
    imageRight: false,
    name: 'backup',
  },
  {
    order: 2,
    title: 'Server VPS: Tenha o seu servidor virtual',
    text: 'Nosso Server Cloud dispõe de escalabilidade, segurança para a sua aplicação e performance.',
    btn01: 'Solicite um orçamento',
    btn02: 'Saiba mais',
    image: serverIMG,
    imageRight: true,
    name: 'server',
  },
  {
    order: 3,
    title: 'Estamos sempre criando mais',
    text: 'Contamos com 3 mil equipamentos espalhados pelo Brasil e mais de 200 contratos ativos apenas na região de Londrina.',
    btn01: 'Solicite um orçamento',
    btn02: 'Saiba mais',
    image: moreIMG,
    imageRight: false,
    name: 'more',
  },
  {
    order: 5,
    title: 'Privadidade | LGPD',
    text: 'Entenda como a Altatech trabalha em conformidade com a Lei Geral de Proteção de Dados.',
    btn01: 'Solicite um orçamento',
    btn02: 'Saiba mais',
    image: privacyIMG,
    imageRight: true,
    name: 'privacy',
  },
]
