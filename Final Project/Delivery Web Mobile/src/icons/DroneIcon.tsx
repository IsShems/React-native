import * as React from "react";
import * as Svg from 'react-native-svg';

interface DroneIconProps {
    width?: number;
    height?: number;
}

const DroneIcon: React.FC<DroneIconProps> = ({ width, height }) => {
    return (
        <Svg.Svg
            width={width ? width : 24}
            height={height ? height : 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Svg.G clipPath="url(#clip0_102_1506)">
                <Svg.Path
                    d="M23.7943 16.6787C23.52 16.4043 23.0752 16.4043 22.8008 16.6787L20.9411 18.5383C20.4915 18.3526 19.9827 18.3526 19.5331 18.5383L15.4588 14.464V9.532L19.5282 5.46264C19.7487 5.55414 19.9872 5.60214 20.2331 5.60214C20.4791 5.60214 20.7176 5.55414 20.9381 5.46264L22.7968 7.32133C22.934 7.45849 23.1138 7.52711 23.2935 7.52711C23.4733 7.52711 23.6531 7.45849 23.7902 7.32133C24.0646 7.04702 24.0646 6.60222 23.7902 6.32786L21.9305 4.46819C22.2058 3.80186 22.0734 3.00527 21.5327 2.46452C20.9919 1.92377 20.1954 1.79139 19.5291 2.06674L17.6694 0.207016C17.3951 -0.0672964 16.9503 -0.0672964 16.6759 0.207016C16.4016 0.481329 16.4016 0.926126 16.6759 1.20048L18.5356 3.06016C18.3498 3.50978 18.3498 4.01856 18.5356 4.46824L14.6178 8.386L12.3975 7.25416C12.1487 7.12731 11.8516 7.12731 11.6025 7.25416L9.37947 8.38736L5.46035 4.46824C5.64611 4.01861 5.64611 3.50983 5.46035 3.06016L7.32002 1.20048C7.59438 0.926172 7.59438 0.481376 7.32002 0.207016C7.04571 -0.0672964 6.60091 -0.0672964 6.32655 0.207016L4.46693 2.06669C3.80055 1.79134 3.00396 1.92381 2.4633 2.46452C1.92255 3.00531 1.79008 3.80181 2.06543 4.46819L0.2058 6.32786C-0.0685593 6.60217 -0.0685593 7.04697 0.2058 7.32133C0.342956 7.45849 0.522769 7.52711 0.702488 7.52711C0.882253 7.52711 1.06207 7.45849 1.19918 7.32133L3.05786 5.46264C3.27836 5.55414 3.51691 5.60214 3.76282 5.60214C4.00877 5.60214 4.24732 5.55414 4.46782 5.46264L8.54116 9.53599V14.468L4.47082 18.5383C4.02119 18.3526 3.51241 18.3526 3.06278 18.5383L1.20311 16.6787C0.9288 16.4043 0.484003 16.4043 0.209644 16.6787C-0.0647156 16.953 -0.0647156 17.3978 0.209644 17.6721L2.06833 19.5308C1.97683 19.7513 1.92883 19.9899 1.92883 20.2358C1.92883 20.7268 2.12003 21.1884 2.46719 21.5354C2.82546 21.8937 3.29613 22.0729 3.7668 22.0729C4.00647 22.0729 4.24605 22.0263 4.47086 21.9333L6.33049 23.793C6.46764 23.9301 6.64746 23.9988 6.82718 23.9988C7.00689 23.9988 7.18675 23.9301 7.32386 23.793C7.59822 23.5187 7.59822 23.0739 7.32386 22.7995L5.46527 20.9408C5.55677 20.7203 5.60477 20.4818 5.60477 20.2359C5.60477 19.9899 5.55677 19.7514 5.46527 19.5309L9.3821 15.614L11.602 16.7456C11.7266 16.8093 11.8634 16.8411 12 16.8411C12.1366 16.8411 12.2731 16.8093 12.3973 16.7459L14.6204 15.6127L18.5385 19.5308C18.447 19.7513 18.399 19.9899 18.399 20.2358C18.399 20.4817 18.447 20.7203 18.5385 20.9408L16.6798 22.7995C16.4055 23.0738 16.4055 23.5186 16.6798 23.7929C16.817 23.9301 16.9968 23.9987 17.1765 23.9987C17.3562 23.9987 17.5361 23.9301 17.6732 23.7929L19.5328 21.9333C19.7576 22.0262 19.9972 22.0729 20.2369 22.0728C20.7075 22.0728 21.1782 21.8936 21.5365 21.5354C21.8836 21.1883 22.0749 20.7267 22.0749 20.2357C22.0749 19.9898 22.0269 19.7512 21.9354 19.5307L23.7941 17.672C24.0686 17.3978 24.0686 16.953 23.7943 16.6787ZM19.9269 3.45798C20.0113 3.37356 20.1222 3.33138 20.2331 3.33138C20.344 3.33138 20.4548 3.37356 20.5392 3.45798C20.708 3.62678 20.708 3.90152 20.5392 4.07031C20.4575 4.15206 20.3487 4.19716 20.2331 4.19716C20.1174 4.19716 20.0087 4.15211 19.9269 4.07031C19.7582 3.90156 19.7582 3.62678 19.9269 3.45798ZM4.0691 4.07036C3.98735 4.15211 3.8786 4.1972 3.76291 4.1972C3.64727 4.1972 3.53852 4.15216 3.45677 4.07036C3.28797 3.90156 3.28797 3.62683 3.45677 3.45803C3.54119 3.37366 3.65205 3.33142 3.76291 3.33142C3.87377 3.33142 3.98468 3.37361 4.0691 3.45803C4.23789 3.62683 4.23789 3.90156 4.0691 4.07036ZM4.07308 20.5419C3.90419 20.7107 3.6296 20.7107 3.46075 20.5419C3.379 20.4602 3.33391 20.3515 3.33391 20.2358C3.33391 20.1201 3.37896 20.0114 3.46075 19.9297C3.54518 19.8453 3.65603 19.803 3.76694 19.803C3.8778 19.803 3.98871 19.8452 4.07308 19.9296C4.15483 20.0114 4.19992 20.1201 4.19992 20.2358C4.19988 20.3515 4.15483 20.4602 4.07308 20.5419ZM14.0538 14.3245L12.0001 15.3715L9.94628 14.3245V9.67544L12.0001 8.62853L14.0538 9.67544V14.3245ZM20.5433 20.542C20.3744 20.7107 20.0998 20.7108 19.9309 20.542C19.8492 20.4603 19.8041 20.3515 19.8041 20.2358C19.8041 20.1201 19.8491 20.0114 19.9309 19.9297C20.0154 19.8453 20.1262 19.803 20.2371 19.803C20.348 19.803 20.4589 19.8452 20.5433 19.9296C20.625 20.0114 20.6701 20.1201 20.6701 20.2358C20.6701 20.3515 20.6251 20.4602 20.5433 20.542Z"
                    fill="black"
                />
            </Svg.G>
            <Svg.Defs>
                <Svg.ClipPath id="clip0_102_1506">
                    <Svg.Rect width="24" height="24" fill="white" />
                </Svg.ClipPath>
            </Svg.Defs>
        </Svg.Svg>
    );
};

export default DroneIcon;
