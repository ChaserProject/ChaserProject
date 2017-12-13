
import { StackNavigator } from 'react-navigation';

import Comment from './Comment';
import Reply from './Reply';

const CommentStack = StackNavigator({
    Comment: {
        screen: Comment,
        navigationOptions: () => ({
            headerStyle: {
                display: 'none'
            }
        })
    },
    Reply: {
        screen: Reply,
        navigationOptions: () => ({
            headerStyle: {
                display: 'none'
            }
        })
    }
}, {
        initialRouteName: 'Comment'
    });


export default CommentStack;

