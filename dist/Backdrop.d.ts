import React from "react";
interface BackdropProps {
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
}
declare const _default: React.MemoExoticComponent<({ onClick, style, className }: BackdropProps) => JSX.Element>;
export default _default;
