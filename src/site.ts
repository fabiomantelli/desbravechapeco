// Single source for sections/categories: drives nav, routes, schemas and JSON-LD.
export const sections = {
  hospedagem: {
    label: 'Hospedagem',
    intro: 'Do hotel no centro à pousada no meio do verde: escolha onde descansar entre um passeio e outro.',
    schemaType: 'LodgingBusiness',
    categories: {
      'hotel-urbano': 'Hotel Urbano',
      'hospedagem-rural': 'Turismo Rural',
      'hospedagem-alternativa': 'Hospedagem Alternativa',
    },
  },
  gastronomia: {
    label: 'Gastronomia',
    intro: 'Café colonial, churrasco gaúcho, cozinha oriental e bares para todos os gostos.',
    schemaType: 'Restaurant',
    categories: {
      cafes: 'Cafés',
      churrascarias: 'Churrascarias',
      bares: 'Bares',
      oriental: 'Oriental',
    },
  },
  atrativos: {
    label: 'Atrativos',
    intro: 'Parques, museus, espaços culturais e o melhor dos produtos locais.',
    schemaType: 'TouristAttraction',
    categories: {
      parques: 'Parques',
      museus: 'Museus',
      'espacos-culturais': 'Espaços Culturais',
      'espacos-esportivos': 'Espaços Esportivos',
      'produtos-locais': 'Produtos Locais',
    },
  },
  servicos: {
    label: 'Serviços',
    intro: 'Guias, transporte e apoio para a sua visita ser tranquila do começo ao fim.',
    schemaType: 'LocalBusiness',
    categories: {
      'servicos-turisticos': 'Serviços Turísticos',
      'apoio-ao-visitante': 'Apoio ao Visitante',
      'servicos-locais': 'Serviços Locais',
    },
  },
} as const;

export type SectionKey = keyof typeof sections;
export const sectionKeys = Object.keys(sections) as SectionKey[];

export const eventCategories = {
  cultura: 'Cultura',
  esportes: 'Esportes',
  gastronomia: 'Gastronomia',
  'feiras-e-exposicoes': 'Feiras e Exposições',
  negocios: 'Negócios',
  'eventos-municipais': 'Eventos Municipais',
} as const;

export const dateBR = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
