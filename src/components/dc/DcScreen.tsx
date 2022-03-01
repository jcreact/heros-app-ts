import { HeroList } from '../hero/HeroList';
import { Publishers } from '../../interfaces/interfaces';

export const DcScreen = () => {
    return (
        <>
            <HeroList publisher={Publishers.DC} sort />
        </>
    );
};
