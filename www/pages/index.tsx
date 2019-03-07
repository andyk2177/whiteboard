import styled from "styled-components";

const Title = styled.h1`
  color: #f800ff;
  font-family: "Helvetica Neue";
  padding: 0 20px;
`;

export default () => (
  <Title>
    ✨ <img height="25" src="/static/highlight@2x.png" alt="HIGHLIGHT" />
  </Title>
);
