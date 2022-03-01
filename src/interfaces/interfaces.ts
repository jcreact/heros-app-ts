export type Publisher = 'DC Comics' | 'Marvel Comics';

export interface Hero {
    id: string;
    name: string;
    publisher: Publisher;
    alterEgo: string;
    firstAppearance: string;
    characters: string;
}
