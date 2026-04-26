import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { name: 'Curtains', href: '/curtains' },
    { name: 'Wallpapers', href: '/wallpapers' },
    { name: 'Fabrics', href: '/fabrics' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900">
              TCC INTERIORS
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full cursor-pointer">
            Cart (0)
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;