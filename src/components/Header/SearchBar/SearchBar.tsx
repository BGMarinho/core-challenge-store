import * as S from './styles';
import Image from 'next/image';

interface SearchBarProps {
  icon: any;
  deviceKind: string;
}
export default function SearchBar({ deviceKind, icon }: SearchBarProps) {
  return (
    <S.SearchBarWrapper id={deviceKind}>
      <input type="search" placeholder="O que está procurando?" />
      <Image src={icon} alt="magnifying-glass-icon" width={18} height={18} />
    </S.SearchBarWrapper>
  );
}
