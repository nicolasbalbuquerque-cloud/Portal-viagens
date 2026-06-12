export interface Destino {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

export const destinosMock: Destino[] = [
  {
    id: "1",
    nome: "Fernando de Noronha",
    descricao: "Um dos arquipélagos mais bonitos do mundo, famoso por suas praias de águas cristalinas e vida marinha rica.",
    imagem: "/images/noronha.jpg",
    preco: 3500
  },
  {
    id: "2",
    nome: "Rio de Janeiro",
    descricao: "A Cidade Maravilhosa une praias icônicas como Copacabana e Ipanema ao calor da cultura carioca.",
    imagem: "/images/rio.jpg",
    preco: 1200
  },
  {
    id: "3",
    nome: "Salvador",
    descricao: "Berço cultural do Brasil, com o charme do Pelourinho, praias belíssimas e uma culinária inesquecível.",
    imagem: "/images/salvador.jpg",
    preco: 1500
  },
  {
    id: "4",
    nome: "Gramado",
    descricao: "O aconchego da Serra Gaúcha com arquitetura europeia, gastronomia de ponta e o famoso Festival de Cinema.",
    imagem: "/images/gramado.jpg",
    preco: 2200
  }
];