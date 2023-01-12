import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-300);
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
  padding: 4rem;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
