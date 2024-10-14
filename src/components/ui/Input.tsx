import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input className={`block mt-2 h-[45px] border-[3px] border-transparent bg-cloud-mist hover:bg-pale-fog rounded-lg p-2 w-full text-midnight-slate focus:outline-none focus:border-light-purple ${className}`} {...props} />
        </div>
    );
};

export default Input;
