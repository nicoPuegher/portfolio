import styled from '@emotion/styled';

const Paragraph = styled.p`
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  margin-bottom: ${props => props.mb};
  text-align: justify;
  hyphens: auto;
  opacity: ${props => props.opacity};
`;

export default Paragraph;
