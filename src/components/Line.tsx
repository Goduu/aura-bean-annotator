import React, { FC } from 'react'
import { ColorKeys, borderColors } from '../colors';

export type LineProps = {
    right?: boolean;
    color?: ColorKeys;
};

export const Line: FC<LineProps> = ({ right, color = "white" }) => {

    return (
        <div className={`absolute inset-y-0  border-r-8 ${borderColors[color]} ${right ? "right-0 mr-4" : "left-0 ml-4"}`} />
    )
}
