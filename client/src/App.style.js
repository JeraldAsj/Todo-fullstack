/** @format */

import styled from "styled-components";

export const Weapper = styled.div``;

export const Heading = styled.h1`
  text-align: center;
  color: #0c7cff;
`;
export const Fillter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;
export const Delete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;
export const Button = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background: ${({ btn }) => (btn == "Delete" ? "#e93c3c" : "#0c7cff")};
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #333333;
`;

export const MainContainerOne = styled.div``;
export const Span = styled.span`
  color: #468ee0;
  text-decoration: ${({ status }) => (status ? "line-through" : "")};
`;
