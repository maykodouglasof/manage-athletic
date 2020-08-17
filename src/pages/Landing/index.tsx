import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineUserAdd, AiOutlineGift } from 'react-icons/ai';

import logoImg from '../../assets/images/logoatletica.svg';
import landingImg from '../../assets/images/programming.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Container, LogoContainer, ButtonContainer } from './styles';
import { api } from '../../services/api';

const SignIn: React.FC = () => {
  const [totalConnection, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      setTotalConnections(response.data.total);
    });
  }, []);

  return (
    <Container id="page-landing">
      <div id="page-landing-content" className="container">
        <LogoContainer className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua conexão com a atlética!</h2>
        </LogoContainer>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <ButtonContainer className="buttons-container">
          <Link to="signup" className="study">
          <AiOutlineUserAdd size={42} />
            Cadastrar
          </Link>
          <Link to="give-classes" className="give-classes">
            <AiOutlineGift size={42} />
            Benefícios
          </Link>
        </ButtonContainer>

        <span className="total-connection">
          {`Total de ${totalConnection} alunos já cadastrados`}
          <AiFillHeart size={20} />
        </span>
      </div>
    </Container>
  );
};

export default SignIn;
