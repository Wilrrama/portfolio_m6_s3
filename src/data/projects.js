import boleiros from "../assets/projects/1.boleiros.png";
import peregrino from "../assets/projects/2.peregrino.png";
import boleiros_liga from "../assets/projects/3.boleirosliga.jpg";
import leandro_barber from "../assets/projects/4.LeandroBarber.png";
import coco_campeao from "../assets/projects/5.coco_campeao.png";
import nu_kenzie from "../assets/projects/6.nu_kenzie.png";
import portfy from "../assets/projects/7.portfy.png";
import kenkie_hub from "../assets/projects/8.kenkie_hub.png";
import food from "../assets/projects/9.food.png";
import talktome from "../assets/projects/10.talktome.png";
import react from "../assets/tecnologies/react2.png";
import typescript from "../assets/tecnologies/typeScript.png";
import nodejs from "../assets/tecnologies/nodejs.png";
import nextjs from "../assets/tecnologies/nextjs.png";
import tailwind from "../assets/tecnologies/tailwind.jpeg";

export const projects = [
  {
    id: 10,
    nome: "Talk to me",
    img: talktome,
    tipo: "Escolar",
    descrição: "Aplicativo de Video-Conferencia.",
    git: "https://github.com/Wilrrama/talk_to_me_hero_code",
    deploy: "https://github.com/Wilrrama/talk_to_me_hero_code",
    tech: [nodejs, typescript, nextjs, tailwind],
  },
  {
    id: 9,
    nome: "Food",
    img: food,
    tipo: "Escolar",
    descrição: "Cardápio de Lanchonete, Crud, consumo de API.",
    git: "https://github.com/Wilrrama/Food_devPoint",
    deploy: "https://github.com/Wilrrama/Food_devPoint",
    tech: [react, nodejs],
  },
  {
    id: 8,
    nome: "Kenzie Hub",
    img: kenkie_hub,
    tipo: "Escolar",
    descrição: "Cadastro dos habilidades, Crud, consumo de API.",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_Wilson",
    deploy: "https://react-entrega-kenzie-hub-wilson.vercel.app/dashboard",
    tech: [react],
  },
  {
    id: 7,
    nome: "Portfy",
    img: portfy,
    tipo: "Escolar",
    descrição:
      "Cria um portifolio on-line, com CRUD e consumo de API, postagem de projetos.",
    git: "https://github.com/mariosilva81/m3-g5-portify",
    deploy: "https://portify-indol.vercel.app",
    tech: [react, typescript],
  },
  {
    id: 6,
    nome: "Nu Kenzie",
    img: nu_kenzie,
    tipo: "Escolar",
    descrição: "Aplicação para a entrada e saida de valores.",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie_Wilson",
    deploy: "https://react-entrega-s1-template-nu-kenzie-wilson.vercel.app/",
    tech: [react],
  },
  {
    id: 5,
    nome: "Unidos do Coco",
    img: coco_campeao,
    tipo: "Freelance",
    descrição:
      "Aplicação para a equipe campeã da Copa dos Campeões 2023, organizada pela Liga Hortolandense ",
    git: "https://github.com/Wilrrama/coco_campeao_2023",
    deploy: "https://unidos-do-coco.vercel.app/",
    tech: [react],
  },
  {
    id: 4,
    nome: "Black Styllus Barber",
    img: leandro_barber,
    tipo: "Freelance",
    descrição:
      "Aplicação para meu barbeiro de confiança, divulgando seu Serviçoes e Produtos. E marcando presença na Web",
    git: "https://github.com/Wilrrama/blackStyllusLeandro",
    deploy: "https://blackstyllus.vercel.app/",
    tech: [react],
  },
  {
    id: 3,
    nome: "Boleiros Liga",
    img: boleiros_liga,
    tipo: "Freelance",
    descrição:
      "Gerenciador de Lista de Participantes e Itens, de uma partida de futebol. Agora com venda de material Esportivo: Bolas",
    git: "https://github.com/Wilrrama/Boleiros-Liga",
    deploy: "https://boleiros-liga.vercel.app/",
    tech: [react],
  },
  {
    id: 2,
    nome: "O Peregrino",
    img: peregrino,
    tipo: "Pessoal",
    descrição: "Aplicação com pregações salvas pelo Whatzapp",
    git: "https://github.com/Wilrrama/Peregrino",
    deploy: "https://peregrino.vercel.app/",
    tech: [react],
  },
  {
    id: 1,
    nome: "Lista de Boleiros",
    img: boleiros,
    tipo: "Freelance",
    descrição:
      "Gerenciador de Lista de Participantes de uma partida de futebol",
    git: "https://github.com/Wilrrama/lista-boleiros",
    deploy: "https://lista-boleiros.vercel.app",
    tech: [react],
  },
];
