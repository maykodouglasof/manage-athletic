import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

const Benefits: React.FC = () => {
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

      <Content>
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

export default Benefits;
