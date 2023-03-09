import { createBoard } from '@wixc3/react-board';
import { NavBar } from '../../../components/nav-bar/nav-bar';

export default createBoard({
    name: 'NavBar',
    Board: () => <NavBar />,
    environmentProps: {
        canvasWidth: 1116,
        windowHeight: 2291,
        canvasHeight: 93,
        windowWidth: 5568,
    },
});
