import styled from "styled-components";

type LabelProps = {
  htmlFor: string;
};

const Label = styled.div<LabelProps>`
  font-size: 0.9rem;
  display: block;
`;

export default Label;
