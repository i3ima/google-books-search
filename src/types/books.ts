export enum BookCategories {
 ALL = 'all',
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
 sortBy: 'relevance' | 'newest',
 page: number
}

export interface GoogleBooksResponse {
 items: Volume[];
 kind: string;
 totalItems: number;
}

export interface Volume {
 kind: string;
 id: string;
 etag: string;
 selfLink: string;
 volumeInfo?: VolumeInfo;
 saleInfo: SaleInfo;
 accessInfo: AccessInfo;
}

export interface AccessInfo {
 country: string;
 viewability: string;
 embeddable: boolean;
 publicDomain: boolean;
 textToSpeechPermission: string;
 epub: Epub;
 pdf: Epub;
 webReaderLink: string;
 accessViewStatus: string;
 quoteSharingAllowed: boolean;
}

export interface Epub {
 isAvailable: boolean;
}

export interface SaleInfo {
 country: string;
 saleability: string;
 isEbook: boolean;
}

export interface VolumeInfo {
 title: string;
 subtitle: string;
 authors?: string[];
 publishedDate: string;
 industryIdentifiers: IndustryIdentifier[];
 readingModes: ReadingModes;
 pageCount: number;
 printType: string;
 categories?: string[];
 maturityRating: string;
 allowAnonLogging: boolean;
 contentVersion: string;
 panelizationSummary: PanelizationSummary;
 imageLinks?: ImageLinks;
 language: string;
 previewLink: string;
 infoLink: string;
 canonicalVolumeLink: string;
}

export interface ImageLinks {
 smallThumbnail?: string;
 thumbnail?: string;
}

export interface IndustryIdentifier {
 type: string;
 identifier: string;
}

export interface PanelizationSummary {
 containsEpubBubbles: boolean;
 containsImageBubbles: boolean;
}

export interface ReadingModes {
 text: boolean;
 image: boolean;
}
