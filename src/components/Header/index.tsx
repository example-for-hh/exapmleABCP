import { FC } from 'react';

const Header: FC<{ title: string }> = ({ title }) => {

    return (
        <header>
            {title}
        </header>
    );
};

export default Header;