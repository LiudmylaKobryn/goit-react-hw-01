import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img src={avatar} alt="Avatar" />
      <p className={s.nameTitle}>{name}</p>
      <p
        className={
          isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
