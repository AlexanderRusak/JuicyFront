import React, { ReactNode } from 'react';
import './Badge.scss';
import { Variant } from '../../../types';
export interface IBadgeProps {
    children: ReactNode;
    badgeContent?: ReactNode;
    className?: string;
    variant?: Variant;
    max?: number;
    position?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight' | 'text';
    display?: boolean;
    /** Расположить сбоку на одном уровне*/
    placeNear?: boolean;
}
declare const Badge: React.FC<IBadgeProps>;
export default Badge;
