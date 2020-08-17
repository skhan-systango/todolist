import { Dimensions } from 'react-native';
const SCREEN_WIDTH = 667;
const SCREEN_HEIGHT = 337;

const { height, width } = Dimensions.get('window');

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const verticalScale = (size) => (height / SCREEN_HEIGHT) * size;

export { verticalScale, height, width };
