// app/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo 区域 */}
        <div className='flex items-center gap-8'>
          <Link href='/' className='text-xl font-bold text-blue-600 tracking-tight'>
            NestMart
          </Link>
          <nav className='hidden md:flex items-center gap-6 text-sm font-medium text-gray-700'>
            {/* 基础跳转 */}
            <Link
              href='/products'
              className={`transition hover:text-blue-600 ${isActive('/products') ? 'text-blue-600 font-bold' : ''}`}
            >
              所有商品
            </Link>
            <Link
              href='/about'
              className={`transition hover:text-blue-600 ${isActive('/about') ? 'text-blue-600 font-bold' : ''}`}
            >
              关于我们
            </Link>
          </nav>
        </div>

        {/* 登录/右侧动作区 */}
        <div className='flex items-center gap-4'>
          {/* 控制预加载行为：对于一些极大、极少点击的页面，可以设置为 false 节约带宽 */}
          <Link
            href='/login'
            prefetch={false}
            className='text-sm font-medium text-gray-700 hover:text-blue-600'
          >
            登录
          </Link>
          <Link
            href='/register'
            className='rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500'
          >
            免费注册
          </Link>
        </div>
      </div>
    </header>
  );
}
