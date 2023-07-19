import styled from 'styled-components';
export const Column1 = styled.div`
display: grid;
width: 50%;
`;
export const Column2 = styled.div`
display: grid;
width:50%;
`;

export const FooterLink = styled.a`
  color: var(--native2);
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor:pointer;

  &:hover {
    color: purple;
    transition: color 0.1s ease-in;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    margin-bottom: 10px;
	font-size: 15px;
  }
`;

export const Heading1 = styled.p`
  font-size: 24px;
  color: var(--native2);
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: bold;
  display: block;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
`;
export const Heading2 = styled.p`
  font-size: 24px;
  color: var(--native2);
  margin-bottom: 40px;
  font-weight: bold;
  display: block;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
`;
