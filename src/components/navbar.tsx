import Image from 'next/image';
import Link from 'next/link';
import About from '@/components/about';

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 mb-10 w-full">
      <Link className="text-lg font-semibold" href={'/'}>
        <div className="relative h-10 w-40">
          <Image priority={true} src={'./logo.svg'} alt="logo" fill />
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <About />
      </div>
    </div>
  );
}

export default Navbar;
