import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications, MdArrowBack } from "react-icons/md";

import logo from "../../assets/images/logoatletica.svg";

import {
  Container,
  Content,
  LeftContent,
  BackToPreviousPage,
  RightContent,
} from "./styles";

interface HeaderProps {
  goBackLink?: string;
  fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ goBackLink, fixed }) => {
  return (
    <Container fixed={fixed}>
      <Content>
        <LeftContent>
          <Link to="/">
            <img src={logo} alt="Localiza Jobs" />
          </Link>

          {goBackLink && (
            <Link to={goBackLink}>
              <BackToPreviousPage>
                <MdArrowBack color="#fff" size={18} />
                <span>Voltar</span>
              </BackToPreviousPage>
            </Link>
          )}
        </LeftContent>

        <RightContent>
          <Link to="/signup">
           Cadastrar
          </Link>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
