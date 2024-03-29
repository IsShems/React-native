import * as React from "react";
import * as Svg from 'react-native-svg';

interface PersonIconProps {
    width?: number;
    height?: number;
}

const PersonIcon: React.FC<PersonIconProps> = ({ width, height }) => {
    return (
        <Svg.Svg
            width={width ? width : 24}
            height={height ? height : 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Svg.Path
                d="M12.8681 5.34722C13.5162 5.34722 14.0417 4.82178 14.0417 4.17361C14.0417 3.52544 13.5162 3 12.8681 3C12.2199 3 11.6945 3.52544 11.6945 4.17361C11.6945 4.82178 12.2199 5.34722 12.8681 5.34722Z"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Svg.Path
                d="M15.2153 21.7778L14.2169 18.7826C14.1017 18.4369 13.9075 18.1228 13.6499 17.8651L10.5208 14.7361M10.5208 14.7361L11.6944 8.86804M10.5208 14.7361L7 21.7778M11.6944 8.86804L14.9459 12.1195C15.1243 12.2979 15.3303 12.4464 15.556 12.5592L17.5625 13.5625M11.6944 8.86804L8.8437 10.7685C8.4094 11.0581 8.084 11.4841 7.91894 11.9793L7 14.7361"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg.Svg>
    );
};

export default PersonIcon;
