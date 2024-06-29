import s from "./Profile.module.css";
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className={s.userInfo}>
          <img src={image} alt="User avatar" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className={s.lable}>Followers </span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li>
            <span className={s.lable}>Wiews </span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li>
            <span className={s.lable}>Likes </span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
