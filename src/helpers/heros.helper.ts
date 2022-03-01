import { herosData } from '../data/heros';
import { Publisher, Hero } from '../interfaces/interfaces';

export const getHerosByPublisher = (publisher: Publisher): Hero[] => {
    return herosData.filter((hero) => hero.publisher === publisher);
};

export const getHeroById = (id: string): Hero | undefined => {
    return herosData.find((hero) => hero.id === id);
};
