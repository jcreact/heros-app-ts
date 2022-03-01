export const enum Publishers {
    MARVEL = 'Marvel Comics',
    DC = 'DC Comics',
}

export type Publisher = 'Marvel Comics' | 'DC Comics';

export interface Hero {
    id: string;
    name: string;
    publisher: Publisher;
    alterEgo: string;
    firstAppearance: string;
    characters: string;
}
