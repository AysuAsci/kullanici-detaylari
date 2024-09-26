
import "./globals.css";
import { fetchUsers } from './data/users'; 

export const metadata = {
  title: 'Kullanıcı Detayları',
  description: 'Kullanıcı detaylarını görüntüleyin',
};

export default async function RootLayout({ children }) {
  const users = await fetchUsers();

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
