import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';

import { AiOutlineExclamation } from 'react-icons/ai';

import { api } from '../../services/api';

import {
  Container,
  Content,
  DataContent,
  ButtonContainer,
  SelectButton,
  WarningContent,
} from './styles';

const SignUp: React.FC = () => {
  const { push } = useHistory();
  const { addToast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get('users').then((response) => {
      setTotal(response.data.total);
    });
  }, []);

  const addNewUser = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      api
        .post('/users', {
          name,
          github_username,
          whatsapp,
          email,
          password,
          password_confirmation
        })
        .then(() => {
          addToast({
            type: 'success',
            title: 'Cadastro realizado.',
            description: 'Você já pode fazer o logon na plataforma!',
          });

          push('/');
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
          });
        });
    },

    [
      name,
      github_username,
      whatsapp,
      email,
      password,
      password_confirmation,
      push,
      addToast,
    ],
  );

  return (
    <Container>
      <PageHeader
        singUp
        title="Que incrível ter você em nossa plataforma."
        titleDescription={`${total} usuários cadastrados!`}
      />

      <Content onSubmit={addNewUser}>
        <DataContent>
          <legend>Seus Dados</legend>

          <Input
            name="name"
            title="Nome Completo"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name="email"
            title="Email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            name="github_username" 
            title="Usuário do Github"
            value={github_username}
            onChange={(e) => setGithubUsername(e.target.value)}
          />

          <Input
            name="whatsapp"
            title="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <Input
            name="password"
            title="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            name="password_confirmation"
            title="Confirmação de Senha"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </DataContent>

        <WarningContent>
          <p>
            <AiOutlineExclamation size={42} />
            Importante ! <br />
            Preencha todos os dados
          </p>

          <button type="submit">Salvar Cadastro</button>
        </WarningContent>
      </Content>
    </Container>
  );
};

export default SignUp;
