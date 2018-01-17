
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + ((horizontalScale(size) - size) * factor);

function fontScale(size) {
    const fontHeight = verticalScale(size);
    const fontWidth = horizontalScale(size);
    return (fontHeight + fontWidth) / 2;
}

export {
    horizontalScale, verticalScale, moderateScale,
    width, height, fontScale
};

