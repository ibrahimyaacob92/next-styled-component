import NextLink from "next/link";
import styled from "styled-components";

type LinkProps = {
  href: string;
  name: string;
};

const StyledAnchor = styled.a`
  color: red;
  font-size: 30px;
  text-decoration: none;
`;

export const StyledLink = ({ href, name }: LinkProps) => (
  <NextLink href={href} passHref>
    <StyledAnchor>{name}</StyledAnchor>
  </NextLink>
);
