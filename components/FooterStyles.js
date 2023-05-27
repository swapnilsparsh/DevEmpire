import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: blue;
position: relative;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display:inline-block;
	float:right;
`

export const Column1 = styled.div`
display: flex;
flex-direction: column;
float:left;
`;
export const Column2 = styled.div`
display: flex;
flex-direction: column;
float :right;
`;

// export const Row = styled.div`
// display: block;
// grid-template-columns: repeat(auto-fill,
// 						minmax(185px, 1fr));
// grid-gap: 20px;

// @media (max-width: 1000px) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
// `;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading1 = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
display:block;
`;
export const Heading2 = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
display:block;
`;
