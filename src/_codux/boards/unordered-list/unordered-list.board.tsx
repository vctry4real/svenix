import { createBoard } from '@wixc3/react-board';
import { UnorderedList } from '../../../components/unordered-list/unordered-list';

export default createBoard({
    name: 'UnorderedList',
    Board: () => <UnorderedList></UnorderedList>
});
