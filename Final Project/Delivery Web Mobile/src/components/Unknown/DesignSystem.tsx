import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

const Weight: any = {
    normal: {
        fontWeight: '400'
    },
    medium: {
        fontWeight: '500'
    },
    semiBold: {
        fontWeight: '600'
    },
    semiBold700:
    {
        fontWeight: '700'
    },
    bold: {
        fontWeight: '800'
    },
}

interface IBaseText {
    text: string,
    alignSelf?: string;
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
    numberOfLines?: number;
    marginHorizontal?: number;
    fontSize: number;
    color?: string;
    weight: 'normal' | 'medium' | 'semiBold' | 'semiBold700' | 'bold';
    textStyles?: StyleProp<TextStyle>;
}

export const BaseText = ({
    text,
    alignSelf,
    marginTop,
    marginLeft,
    marginBottom,
    marginHorizontal,
    fontSize,
    color,
    weight,
    numberOfLines,
    textStyles
}: IBaseText) => {
    return (
        <Text style={[
            {
                fontSize,
                color,
                alignSelf,
                marginTop,
                marginLeft,
                marginBottom,
                marginHorizontal,
                ...Weight[weight],
            },
            textStyles
        ]}
        numberOfLines={numberOfLines} 
        >{text}</Text>
    );
}
