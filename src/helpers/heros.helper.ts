import { herosData } from '../data/heros';
import { Publisher, Hero } from '../interfaces/interfaces';

export const getHerosByPublisher = (publisher: Publisher): Hero[] => {
    return herosData.filter((hero) => hero.publisher === publisher);
};

export const getHeroById = (id: string): Hero | undefined => {
    return herosData.find((hero) => hero.id === id);
};

export const getHerosByName = (term: string): Hero[] => {
    if (!term || !term?.trim()) {
        return [];
    }
    term = term.trim().toLowerCase();
    return herosData.filter((hero) => hero.name.toLowerCase().includes(term));
};
