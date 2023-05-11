import Image from 'next/image';
import logo from '../../assets/20230430233842.png';

export default function Header() {
  return (
    <div className='flex h-[100px] bg-slate-100'>
      <div className='w-[1200px] mx-[auto] my-[0]'>
        <div className='logo h-full flex items-center'>
          <Image
            src={logo}
            width={160}
            height={70}
            alt='logo'
          />
        </div>
        <div className='login-model h-full flex items-center'>
          <button className='btn'>Button</button>
        </div>
      </div>
    </div>
  );
}
