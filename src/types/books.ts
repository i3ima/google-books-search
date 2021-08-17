export enum BookCategories {
 ALL= 'all',
 ART = 'art',
 BIOGRAPHY = 'biography',
 COMPUTERS = 'computers',
 HISTORY = 'history',
 MEDICAL = 'medical',
 POETRY = 'poetry'
}

export interface SearchOptions {
 name: string
 category: BookCategories
 sortBy: 'relevance' | 'newest'
}
