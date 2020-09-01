import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0px auto;
`;

export const Journeys = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(auto, auto));
    padding: 10px;
  }
`;

export const MenuContent = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

h2 {
  font-size: 24px;
  color: #6C6C80;
}
  select {
  background: #F0F0F5;
  border-radius: 8px;
  border: 0;
  padding: 12px;
  font-size: 16px;
  color: #6C6C80;
  width: 100%;
}

button {
  width: 100%;
  height: 48px;
  background: #1E0253;
  border-radius: 8px;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  margin-top: 20px;
  transition: background-color 0.2s;
  cursor: pointer;
}

 button:hover {
  background: #1E0270;
}


  @media (max-width: 1120px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  h2 {
    color: #6C6C80;
  }
`;
