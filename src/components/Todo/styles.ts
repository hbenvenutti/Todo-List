import styled, {css} from "styled-components";

interface CustomProps {
  done: boolean;
}

export const Component = styled.div<CustomProps>`
  font-size: 0.875rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;

  width: 100%;
  height: 4.5rem;
  padding: 1rem;

  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  
  p {
    color: ${props => props.done ? css`var(--gray-300)` : css`var(--gray-100);`};

    width: 632px;
    text-decoration: ${props => props.done && 'line-through'};
  }

  svg {
    color: var(--gray-300);
    font-size: 1.5rem;
  }

  .check {
    color: var(--gray-100);
    font-size: 0.74rem;
    justify-content: center;
    align-items: center;
  }

  .trash {
    display: flex;
    background: transparent;
    border: 0;
  }

  .radio {
    border: 2px solid ${props => props.done ? css`var(--purple-600)` : css`var(--blue-500)`};
    background: ${props => props.done ? css`var(--purple-600)` : 'transparent'};
    border-radius: 100%;
    width: 1.5625rem;
    height: 1.5625rem;
  }
`
