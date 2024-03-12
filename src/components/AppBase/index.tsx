import React, { FC, useCallback, useState } from 'react';
import Button from '../ui/Button';
import { User } from '../../types';
import UserInfo from '../UserInfo';
import { API_URL } from '../../vars';
import useThrottle from '../../hooks/useThrottle';

const AppBase: FC = () => {

    const [user, setUser] = useState<User | null>(null);

    const receiveRandomUser = useCallback(async () => {
        try {
            const id = Math.floor(Math.random() * (10 - 1)) + 1;
            const response = await fetch(`${API_URL}/${id}`);
            const _user = (await response.json()) as User;
            setUser(_user);

        } catch (error) {
            console.error("Error fetching random user:", error);
        }
    }, []);


    useThrottle(receiveRandomUser, 5000);


    const handleButtonClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();

        receiveRandomUser();
    };


    return (
        <>


            <Button
                text="Get a random user"
                onClick={handleButtonClick}
            />
            {user && <UserInfo {...{ user }} />}

        </>


    );
};

export default AppBase;