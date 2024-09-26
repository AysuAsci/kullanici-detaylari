
import { fetchUsers } from '../../data/users';
import styles from '../../../styles/UserDetail.module.css'; 

const UserDetail = async ({ params }) => {
  const users = await fetchUsers();
  const user = users.find(user => user.id === parseInt(params.id));

  if (!user) {
    return <div>Kullanıcı bulunamadı.</div>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>{user.name} (ID: {user.id})</h1>
      <h2 className={styles.h2}>E-posta: {user.email}</h2>
      <h2 className={styles.h2}>Yaş: {user.age}</h2>
      <div className={styles.main}>
        <h3>Yapılacaklar Listesi:</h3>
        <ol>
          {user.todos.map(todo => (
            <li key={todo.id} className={todo.completed ? styles.completed : ''}>
              {todo.todo}
              <p>{todo.description}</p> {}
            </li>
          ))}
        </ol>
      </div>
      <footer className={styles.footer}>Kullanıcı detayları gösteriliyor.</footer>
    </div>
  );
};

export default UserDetail;