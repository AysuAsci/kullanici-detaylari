import Link from 'next/link';
import { fetchUsers } from './data/users';
import styles from '../styles/Home.module.css';

const Home = async () => {
  const users = await fetchUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kullanıcılar Listesi</h1>
      <ul className={styles.userList}>
        {users.map(user => (
          <li key={user.id} className={styles.userItem}>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;