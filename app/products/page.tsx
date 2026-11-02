import ProductSearch from './ProductSearch';

// app/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      <ProductSearch />
      <h1 className='text-3xl font-extrabold text-gray-900 mb-6'>全部商品</h1>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {/* 模拟的商品卡片 */}
        {[1, 2, 3].map(id => (
          <div key={id} className='rounded-lg border bg-white p-4 shadow-sm'>
            <div className='h-48 w-full rounded-md bg-gray-200 mb-4' />
            <h3 className='font-semibold text-gray-800'>示例商品 #{id}</h3>
            <p className='text-sm text-gray-500 mt-1'>高性能电商全栈开发实战示范</p>
            <div className='mt-4 flex items-center justify-between'>
              <span className='text-lg font-bold text-blue-600'>¥ 299.00</span>
              <button className='rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700'>
                查看详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
