// src/components/FriendListItem.jsx

import styles from './FriendListItem.module.css'; // Попередньо створіть цей CSS модуль

function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <div className={styles.item}>
      <span className={statusClass}>{isOnline ? 'Online' : 'Offline'}</span>
      <img className={styles.avatar} src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default FriendListItem;
