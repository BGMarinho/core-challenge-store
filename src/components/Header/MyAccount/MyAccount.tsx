import Image from 'next/image';
import * as S from './styles';

interface MyAccountProps {
  icon: any;
  deviceKind: string;
}
export default function MyAccount({ deviceKind, icon }: MyAccountProps) {
  return (
    <S.MyAccountWrapper id={deviceKind} className="my-account">
      <Image src={icon} alt="user-icon" width={18} height={18} />
      <p>Minha conta</p>
    </S.MyAccountWrapper>
  );
}
