import * as React from "react";
import * as Svg from 'react-native-svg';

interface DeliveryIconProps {
    width?: number;
    height?: number;
}

const DeliveryIcon: React.FC<DeliveryIconProps> = ({ width, height }) => {
    return (
        <Svg.Svg
            width={width ? width : 24}
            height={height ? height : 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Svg.Path
                d="M14.2667 6.26667C14.8926 6.26667 15.4 5.75926 15.4 5.13333C15.4 4.50741 14.8926 4 14.2667 4C13.6407 4 13.1333 4.50741 13.1333 5.13333C13.1333 5.75926 13.6407 6.26667 14.2667 6.26667Z"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Svg.Path
                d="M12 18.7333V14.2L8.60001 11.9333L12 8.53333L14.2667 10.8L16.5333 11.9333"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Svg.Path
                d="M5.19999 21C7.07776 21 8.59999 19.4778 8.59999 17.6C8.59999 15.7222 7.07776 14.2 5.19999 14.2C3.32222 14.2 1.79999 15.7222 1.79999 17.6C1.79999 19.4778 3.32222 21 5.19999 21Z"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Svg.Path
                d="M18.8 21C20.6778 21 22.2 19.4778 22.2 17.6C22.2 15.7222 20.6778 14.2 18.8 14.2C16.9222 14.2 15.4 15.7222 15.4 17.6C15.4 19.4778 16.9222 21 18.8 21Z"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg.Svg>
    );
};

export default DeliveryIcon;
