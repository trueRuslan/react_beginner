import React from 'react';

import styles from './NotFound.module.scss';

const Index = () => {
  return (
    <div className={styles.block}>
      <h1>Ничего не нашлось :(</h1>
      <p className={styles.descr}>Мы сожалеем но, данная страница отсутствует</p>
    </div>
  );
};

export default Index;
