const inputs = [
  {
    type: 'text',
    name: 'title',
    lbTestId: 'title-input-label',
    iptTestId: 'title-input',
    label: 'Título',
  },
  {
    type: 'text',
    name: 'subtitle',
    lbTestId: 'subtitle-input-label',
    iptTestId: 'subtitle-input',
    label: 'Subtítulo',
  },
  {
    type: 'textarea',
    name: 'storyline',
    lbTestId: 'storyline-input-label',
    iptTestId: 'storyline-input',
    label: 'Sinopse',
  },
  {
    type: 'select',
    name: 'genre',
    lbTestId: 'genre-input-label',
    iptTestId: 'genre-input',
    label: 'Gênero',
  },
  {
    type: 'number',
    name: 'rating',
    lbTestId: 'rating-input-label',
    iptTestId: 'rating-input',
    label: 'Avaliação',
  },
  {
    type: 'text',
    name: 'imagePath',
    lbTestId: 'image-input-label',
    iptTestId: 'image-input',
    label: 'Imagem',
  },
];

export default inputs;
