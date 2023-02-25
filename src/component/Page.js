import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;

  /* фіксуємо фон на одному місці */
  background-attachment: fixed;
`;
