import styled from '@emotion/styled';

export const Section = styled.section`
  width: 300px;
  margin: 20px auto;
  border: 2px solid #d498c6;
  border-radius: 4px;
  background-color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  color: grey;
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: calc(100% / 4);
  padding: 10px;
  :first-child {
    background-color: #33f6ff;
  }
  :nth-child(6n + 2) {
    background-color: #9f33ff;
  }
  :nth-child(3n) {
    background-color: #ff3368;
  }
  :nth-child(4n) {
    background-color: #ff9c33;
  }
  :last-child {
    background-color: #7dff33;
  }
`;
