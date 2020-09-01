import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api }from "../../services/api";
import Header from "../../components/Header";
import Loading from "./Loading";

import UserForm from '../../components/UserForm';
import UserItem from '../../components/UserItem';

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  async function handleAddUser(data) {
    const response = await api.post('/devs', data)

    setUsers([...users, response.data]);
  }
  return (
    <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <UserForm onSubmit={handleAddUser} />
    </aside>

    <main>
      <ul>
        {users.map(user => (
          <UserItem key={user._id} dev={user} />
        ))}
      </ul>
    </main>
  </div>
  );
};

export default Home;
