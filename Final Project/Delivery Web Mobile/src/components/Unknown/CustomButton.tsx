import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface CustomButtonProps {
  width: number;
  height: number;
  alignSelf?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
  marginTop?: number;
  marginLeft?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number; 
  onPress: () => void;
  children: ReactNode;
}

export default function CustomButton({
  width,
  height,
  alignSelf,
  marginTop,
  marginLeft,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  onPress,
  children
}: CustomButtonProps) {
  const styles = StyleSheet.create({
    buttonStyle: {
      width: width,
      height: height,
      marginTop: marginTop,
      marginLeft: marginLeft,
      alignSelf: alignSelf ? alignSelf : 'auto',
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderRadius: borderRadius,
      borderWidth: borderWidth, 
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }
  });

  return (
    <Pressable onPress={onPress} style={styles.buttonStyle}>
      {children}
    </Pressable>
  );
}
