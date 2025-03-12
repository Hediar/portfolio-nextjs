import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <Link href="/" className="font-bold text-xl flex items-center gap-2">
        Portfolio
      </Link>
      
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-gray-300 hover:text-black transition-colors">About</Link>
          <Link href="/projects" className="text-gray-300 hover:text-black transition-colors">Projects</Link>
          <Link href="/experience" className="text-gray-300 hover:text-black transition-colors">Experience</Link>
          <Link href="/contact" className="text-gray-300 hover:text-black transition-colors">Contact</Link>
        </nav>
        
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {/* <Image 
            src="/profile-pic.jpg" 
            alt="Profile" 
            width={40} 
            height={40} 
            className="object-cover"
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;