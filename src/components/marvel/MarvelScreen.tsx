import { HeroList } from '../hero/HeroList';
import { Publishers } from '../../interfaces/interfaces';

export const MarvelScreen = () => {
    return (
        <>
            <HeroList publisher={Publishers.MARVEL} sort />
        </>
    );
};
