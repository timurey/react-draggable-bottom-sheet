import React, { MouseEventHandler } from "react";
import { DraggableEventHandler } from "@azabraao/react-draggable";
import "./styles.css";
interface BottomSheetProps {
    children: React.ReactNode;
    close: VoidFunction;
    isOpen: boolean;
    modalOnDesktop?: boolean;
    desktopBreakpoint?: number;
    disabled?: boolean;
    onDrag?: DraggableEventHandler;
    onMouseDown?: (e: MouseEvent) => void;
    onStart?: DraggableEventHandler;
    onBackdropClick?: MouseEventHandler;
    classNames?: {
        bottomSheet?: string;
        backdrop?: string;
        draggable?: string;
        window?: {
            wrap?: string;
            content?: string;
        };
        dragIndicator?: {
            wrap?: string;
            indicator?: string;
        };
    };
    styles?: {
        bottomSheet?: React.CSSProperties;
        backdrop?: React.CSSProperties;
        draggable?: React.CSSProperties;
        window?: {
            wrap?: React.CSSProperties;
            content?: React.CSSProperties;
        };
        dragIndicator?: {
            wrap?: React.CSSProperties;
            indicator?: React.CSSProperties;
        };
    };
}
declare const _default: React.MemoExoticComponent<({ children, isOpen, close, onBackdropClick, onDrag, onStart, onMouseDown, modalOnDesktop, desktopBreakpoint, styles, disabled, classNames, }: BottomSheetProps) => JSX.Element | null>;
export default _default;
