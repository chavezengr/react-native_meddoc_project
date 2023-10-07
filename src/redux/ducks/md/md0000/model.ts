export interface Imd0000 {
  id: string
  name?: string
  category: string
}

export const initialState: Imd0000[] = [
  { id: '1', name: 'Adults', category: 'For Adults' },
  { id: '2', name: 'Kids', category: 'For Kids' },
  { id: '3', name: 'Infants', category: 'For Infants' },
  { id: '4', name: 'Generic', category: 'Generics' },
  { id: '5', name: 'Branded', category: 'Branded' },
  { id: '6', name: 'Vacine', category: 'Vacines' },
]
