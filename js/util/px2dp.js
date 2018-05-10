import {Dimensions} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
// const deviceHeightDp = Dimensions.get('window').height;
// const uiHeightPx = 640;
const uiWidthPx = 640;

export default function px2dp(uiElementPx) {
    // return uiElementPx *  deviceHeightDp / uiHeightPx;
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}