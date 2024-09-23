import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats:{followers, views, likes}}) {
    return (
      <div className={css.profile}>
         <div className={css.description}>
          <img
            src={image}
            alt={name}
            className={css.avatar}
          />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  }

