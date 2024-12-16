'use client';
// import corebizWhite from '../../public/png/site-logo-corebiz-branco.png';
// import email from '../../public/svg/email.svg';
// import headset from '../../public/svg/headset.svg';
import Header from '@/components/Header';
import MainShelf from '@/components/MainShelf';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas: 'Header' 'Banner' 'Main' 'Newsletter' 'Footer';
  padding: 0rem 1.5rem;
  gap: 1rem;
`;
const Banner = styled.div`
  grid-area: Banner;
`;
const Newsletter = styled.section`
  grid-area: Newsletter;
  display: flex;
  background-color: #f2f2f2;
  color: #000000;
`;
const Footer = styled.footer`
  grid-area: Footer;
  display: flex;
  background-color: #000000;
  color: #ffffff;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner></Banner>
      <MainShelf />
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
}
