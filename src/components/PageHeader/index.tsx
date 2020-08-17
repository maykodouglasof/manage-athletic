import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillCheckSquare } from 'react-icons/ai';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, BarContainer, HeaderContent } from './styles';
import { useAuth } from '../../hooks/auth';

interface IProps {
  title: string;
  description?: string;
  secondDescription?: string;
  secondDescriptionIcon?: string;
  titleDescription?: string;
  titleDescriptionIcon?: string;
  singUp?: boolean;
}

const PageHeader: React.FC<IProps> = ({
  title,
  children,
  description,
  secondDescription,
  titleDescription,
  titleDescriptionIcon,
  singUp = false,
}) => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <BarContainer>
        <Link to="/" onClick={signOut}>
          <AiOutlineArrowLeft size={42} />
        </Link>
        {singUp ? (
          <p>Cadastro</p>
        ) : (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            {user.is_teacher ? (
              <NavLink to="/give-classes">Dar aula</NavLink>
            ) : null}
            <NavLink to="/profile">Perfil</NavLink>{' '}
          </>
        )}

        <img src={logoImg} alt="Proffy" />
      </BarContainer>

      <HeaderContent>
        <div>
          <strong>{title}</strong>
          <div className="user-content">
            {titleDescription && (
              <>
                {titleDescriptionIcon && (
                  <AiFillCheckSquare size={42} />
                )}
                <p>{titleDescription}</p>
              </>
            )}
          </div>
        </div>
        {description && (
          <div>
            <p>{description}</p>
            {secondDescription && (
              <p>
                {secondDescription}
              </p>
            )}
          </div>
        )}
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
