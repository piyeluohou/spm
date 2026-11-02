// app/products/ProductSearch.tsx
'use client'; // 👈 激活客户端组件，因为我们要处理状态和事件

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ⚠️ 注意：必须从 next/navigation 引入，而不是旧版的 next/router

export default function ProductSearch() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    // 编程式导航：跳转到动态搜索路由或带 query 参数的路由
    // 例如：跳转到 /products?search=iphone
    router.push(`/products?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSearch} className='mb-6 flex max-w-md gap-2'>
      <input
        type='text'
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='搜索感兴趣的商品...'
        className='w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-900'
      />
      <button
        type='submit'
        className='rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition'
      >
        搜索
      </button>
    </form>
  );
}
