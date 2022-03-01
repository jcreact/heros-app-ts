import ThemeApp from './theme/ThemeApp';
import { AppRouter } from './routers/AppRouter';

export function HerosApp() {
    return (
        <ThemeApp>
            <AppRouter />
        </ThemeApp>
    );
}

export default HerosApp;
