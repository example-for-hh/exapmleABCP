import { ButtonHTMLAttributes, FC } from 'react';


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}

const Button: FC<IButtonProps> = ({ type = 'button', text = 'button', ...rest }) => {

    return (
        <button  {...{ type }} {...rest}>
            {text}
        </button>
    );
};

export default Button;