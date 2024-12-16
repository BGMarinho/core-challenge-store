// Images
import menu from '../../../public/svg/menu.svg';
import corebizBlack from '../../../public/png/site-logo-corebiz-preto-cinza.png';
import magnifyingGlass from '../../../public/svg/magnifying-glass.svg';
import userDesktop from '../../../public/svg/user-desktop.svg';
import shoppingCart from '../../../public/svg/shopping-cart.svg';
// Components
import SearchBar from './SearchBar';
import MyAccount from './MyAccount';
import Image from 'next/image';
// Style
import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <div className="header-icons">
        <Image id="mobile" src={menu} alt="menu-icon" width={18} height={18} />
        <Image src={corebizBlack} alt="corebiz-logo-black" priority />
        <SearchBar icon={magnifyingGlass} deviceKind="desktop" />
        <MyAccount icon={userDesktop} deviceKind="desktop" />
        <Image src={shoppingCart} alt="shopping-cart-icon" width={18} height={18} />
      </div>
      <SearchBar icon={magnifyingGlass} deviceKind="mobile" />
    </S.HeaderWrapper>
  );
}
