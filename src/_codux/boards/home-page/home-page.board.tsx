import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../components/home-page/home-page';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    environmentProps: {
        windowWidth: 1086,
        canvasHeight: 774,
        canvasWidth: 1052,
        windowHeight: 595,
    },
});
