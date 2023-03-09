import { createBoard } from '@wixc3/react-board';
import { NavList } from '../../../components/nav-list/nav-list';

export default createBoard({
    name: 'NavList',
    Board: () => (
        <NavList/>
    ),
});
