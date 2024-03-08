import * as React from "react";
import * as Svg from 'react-native-svg';

interface CardBackIconProps {
    width?: number;
    height?: number;
}

const CardBackIcon = ({ width, height }: CardBackIconProps) => {
    return (
        <Svg.Svg
            width={width ? width : 374}
            height={height ? height : 240}
            viewBox="0 0 374 240"
            fill="none"
        >
            <Svg.Rect
                width="374"
                height="240"
                rx="8"
                fill="url(#paint0_linear_95_38)"
            />
            <Svg.Defs>
                <Svg.LinearGradient
                    id="paint0_linear_95_38"
                    x1="0"
                    y1="120"
                    x2="374"
                    y2="120"
                    gradientUnits="userSpaceOnUse"
                >
                    <Svg.Stop stopColor="#B993D6" />
                    <Svg.Stop offset="1" stopColor="#8CA6DB" />
                </Svg.LinearGradient>
            </Svg.Defs>
        </Svg.Svg>
    );
};

export default CardBackIcon;
