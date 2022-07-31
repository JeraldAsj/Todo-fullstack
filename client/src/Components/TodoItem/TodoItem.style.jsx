/** @format */

import styled from "styled-components";

export const Weapper = styled.div`
  padding-top: 2rem;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #333333;
`;

export const MainContainerOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Heading = styled.h1`
  text-decoration: ${({ status }) => (status ? "line-through" : "")};
  color: #0c7cff;
`;

export const Span = styled.span`
  color: #468ee0;
  text-decoration: ${({ status }) => (status ? "line-through" : "")};
`;
export const MainContainerTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
