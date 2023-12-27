import { Button as NativeButton } from "native-base";
import {
  StyleSheet
} from "react-native/Libraries/StyleSheet/StyleSheet";
interface Props {
  content: string;
  variation?: string;
  variationBtn?: string,
  style?: any,
  rounded?: any,
  handleClick?: () => void | null;
}

export default function CustomButton({
  content,
  variation,
  variationBtn,
  style,
  handleClick,
  rounded,
}: Props) {
  return (
    <NativeButton style={style ? style : null} rounded={rounded ? rounded : null} bg={variation ? `${variation}.100` : null} mt={8} onPress={handleClick} variant={variationBtn ? variationBtn : null}>
      {content}
    </NativeButton>
  );
}