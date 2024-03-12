import React, { FC } from 'react';
import { User } from '../../types';

interface IUserInfoProps {
    user: User;
}

const UserInfo: FC<IUserInfoProps> = ({ user }) => {

    const { name, phone } = user

    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{phone}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default UserInfo;