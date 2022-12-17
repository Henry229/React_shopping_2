import React from 'react';
import styles from './ShoppingList.module.css';

const ShoppingList = ({ items, editBtn, deleteBtn }) => {
  return (
    <ul className={styles.items}>
      {items.map((list) => (
        <li key={list.id} className={styles.item}>
          <span className={styles.span}>{list.item}</span>
          <div className='btnGroup'>
            <button className={styles.editBtn} onClick={() => editBtn(list.id)}>
              <i className='fas fa-edit'></i>
            </button>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteBtn(list.id)}
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
