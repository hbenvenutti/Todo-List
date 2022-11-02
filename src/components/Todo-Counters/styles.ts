import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;

  .created {
    display: flex;
    flex-direction: row;
    color: var(--blue-500);
    gap: 0.5rem;
  }

  .concluded {
    display: flex;
    flex-direction: row;
    color: var(--purple-500);
    gap: 0.5rem;
  }

  .counter {
    display: flex;
    border-radius: 999px;
    background: var(--gray-400);
    color: var(--gray-200);
    font-weight: 700;
    font-size: 0.75rem;
    /* padding: 0.0625rem; */
    padding: 0.125rem 0.5rem;
    min-width: 1.5625rem;
    height: 1.1875rem;
    justify-content: center;
  }
`
