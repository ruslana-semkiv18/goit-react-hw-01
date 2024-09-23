
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
        <div className={css.friendWrap}>
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li key={friend.id}>
                <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                    isOnline={friend.isOnline}/>
            </li>))}

            </ul>
            </div>
    )
}