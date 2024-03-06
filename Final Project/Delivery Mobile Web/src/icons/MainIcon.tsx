import * as React from "react";
import * as Svg from 'react-native-svg';

interface MainIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
  width?: number;
  height?: number;
}

const MainIcon: React.FC<MainIconProps> = ({ width, height }) => {
  return (
    <Svg.Svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Svg.Path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Svg.Path
        d="M9 22V12H15V22"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg.Svg>
  );
};

export default MainIcon;
