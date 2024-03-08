import * as React from "react";
import * as Svg from 'react-native-svg';

interface SearchIconProps {
    width?: number;
    height?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({ width, height }) => {
    return (
        <Svg.Svg
            width={width ? width : 24}
            height={height ? height : 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Svg.Path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Svg.Path
                d="M21 21L16.65 16.65"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg.Svg>
    );
};

export default SearchIcon;
