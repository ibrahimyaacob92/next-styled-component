import styled from "styled-components";

type ButtonProps = {
  variant?: "primary" | "secondary";
};

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 999px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 0.25em;
`;

export const FacebookButton = styled(Button)`
  background: "blue";
  ::before {
    content: "Facebook";
  }
`;
