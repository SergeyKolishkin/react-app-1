import React from 'react';
import userPhoto from "..//..//Images/user.png";
import { NavLink } from 'react-router-dom';
import s from './User.module.css'
import { UserType } from '../../TSTypes/TSTypesFile';

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
        return (
            <div className={s.user}>
                <div>
                    {<NavLink to={'/profile/' + user.id}>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""></img>
                        </div>
                    </NavLink>}
                    <div>
                        {user.followed ? 
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {unfollow(user.id)}}>Unfollow</button> 
                            
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {follow(user.id)}}>Follow</button>}
                    </div>
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>)
        }

export default User;
