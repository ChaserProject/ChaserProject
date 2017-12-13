
import { StackNavigator } from 'react-navigation';

import Communication from '../communication/Communication';
import Communicate from '../communicate/Communicate';

const CommunicationStack = StackNavigator({
    Communicate: {
        screen: Communicate,
        navigationOptions: () => ({
            headerStyle: {
                display: 'none'
            }
        })
    }
}, {
        initialRouteName: 'Communicate'
    });


export default CommunicationStack;

