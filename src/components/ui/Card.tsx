"use client";

import React from 'react';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
}

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
    return (
        <div className={`w-[358px] shadow-lg border border-gray-200 rounded-xl bg-white ${className}`}{...rest}>
            {children}
        </div>
    );
}

export default Card;
