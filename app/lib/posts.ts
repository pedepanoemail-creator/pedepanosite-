export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: 'Pedepano' | 'Bruxa Tesusa';
  date: string;
  category: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Quando a cabeça pesa, a gente escreve',
    excerpt: 'Um desabafo sobre os dias em que o mundo parece barulhento demais.',
    content: 'Aqui vai o texto completo do Pedepano sobre as pressões do dia a dia...',
    author: 'Pedepano',
    date: '2024-05-20',
    category: 'Inteligência Emocional'
  },
  {
    id: '2',
    title: 'Verdades Ácidas para Engolir no Café',
    excerpt: 'A Bruxa Tesusa não veio para passar a mão na sua cabeça.',
    content: 'Texto da Bruxa Tesusa sobre como parar de se vitimizar...',
    author: 'Bruxa Tesusa',
    date: '2024-05-21',
    category: 'Relacionamentos'
  }
];
