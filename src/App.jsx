import React, { useState } from 'react';
import styles from './App.module.css';
import ShoppingList from './shoppingList';

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  const [editId, setEditId] = useState('');
  let updated;

  const submit = (event) => {
    event.preventDefault();
    if (editId) {
      console.log(editId);
      console.log([...items]);
      items.map((list, index) => {
        if (list.id === editId) {
          console.log('####', list.id, '/', item);
          updated = [...items];
          console.log(updated);
          updated[index] = { id: list.id, item };
        }
      });
      setItems(updated);
      setEditId('');
      setItem('');
      return;
    }

    setItems([{ id: `${item} - ${Date.now()}`, item }, ...items]);
    setItem('');
  };

  const editBtn = (id) => {
    const editItem = items.find((item) => item.id === id);
    setItem(editItem.item);
    setEditId(id);
  };

  const deleteBtn = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <section className={styles.container}>
      <h1>Shopping List</h1>
      <form className={styles.form} onSubmit={submit}>
        <input
          type='text'
          value={item}
          onChange={(event) => setItem(event.target.value)}
          className={styles.input}
          placeholder='eg. milk'
        />
        <button type='submit' className={styles.submitBtn}>
          Submit
        </button>
      </form>
      <ShoppingList items={items} editBtn={editBtn} deleteBtn={deleteBtn} />
      <button className={styles.allClearBtn} onClick={clearAll}>
        Clear All Items
      </button>
    </section>
  );
};

export default App;
