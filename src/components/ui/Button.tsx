import React from 'react'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => {
    const { children } = props;

    return (
        <button className='w-full h-12 rounded-md bg-vivid-violet hover:bg-electric-violet focus:bg-electric-violet focus:border-[3px] focus:border-light-purple'
            {...props}>{children}</button>
    )
}

export default Button