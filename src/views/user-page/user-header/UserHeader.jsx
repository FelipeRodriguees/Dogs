import React, { useEffect, useState } from 'react';
import UserHeaderNav from './user-header-nav/UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    setTitle('Minhas Fotos');

    if ('/account/analytics' === location.pathname) setTitle('Estátisticas');

    if ('/account/new-post' === location.pathname) setTitle('Nova Foto');
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
