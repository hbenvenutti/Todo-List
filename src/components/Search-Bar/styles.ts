import styled from "styled-components";

export const Component = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  height: 3.375rem;

  input {
    height: 3.375rem;
    width: 39.625rem;
    border-radius: 8px;
    background: var(--gray-500);
    border: solid 1px var(--gray-700);
    padding: 1rem;
    color: var(--gray-300);
  }

  button {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 5.625rem;
    height: 3.375rem;
    background: var(--blue-600);
    border: 0;
    border-radius: 8px;
    color: var(--gray-100);
    font-weight: 600;
  }
`
