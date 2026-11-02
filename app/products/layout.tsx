// app/products/layout.tsx
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* 商品模块的左侧固定分类栏 */}
      <aside className='w-64 bg-white p-6 shadow-md'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>商品分类</h2>
        <ul className='space-y-2 text-sm text-gray-600'>
          <li className='hover:text-blue-600 cursor-pointer'>数码电子</li>
          <li className='hover:text-blue-600 cursor-pointer'>服装鞋帽</li>
          <li className='hover:text-blue-600 cursor-pointer'>居家生活</li>
        </ul>
      </aside>

      {/* 右侧主内容区 */}
      <main className='flex-1 p-8'>{children}</main>
    </div>
  );
}
