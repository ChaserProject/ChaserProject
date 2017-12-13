
import { StyleSheet } from 'react-native';
import {
    horizontalScale, moderateScale, verticalScale, fontScale
} from '../../utillities/Scale';
import Color from '../color/Color';

const { blue5, white } = Color;
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBlue: {
        flex: 1,
        backgroundColor: blue5
    },
    headerNavTitle: {
        color: white,
        fontSize: fontScale(20),
        alignSelf: 'center',
    },
    headerNav: {
        backgroundColor: blue5
    },
    titleText: {
        fontSize: fontScale(16)
    },
    baseText: {
        fontSize: fontScale(13)
    },
    smallText: {
        fontSize: fontScale(11)
    },
    titleBoldText: {
        fontSize: fontScale(16),
        fontWeight: 'bold'
    },
    baseBoldText: {
        fontSize: fontScale(13),
        fontWeight: 'bold'
    },
    smallBoldText: {
        fontSize: fontScale(11),
        fontWeight: 'bold'
    },
});
