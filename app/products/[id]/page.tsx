// app/products/[id]/page.tsx

interface ProductDetailProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ coupon?: string }>; // 比如访问 /products/123?coupon=VIP888
}

export default async function ProductDetailPage({ params, searchParams }: ProductDetailProps) {
  // 在 Next.js 15 中，必须 await 参数对象
  const { id } = await params;
  const { coupon } = await searchParams;

  return (
    <div className='rounded-xl bg-white p-8 shadow-sm border'>
      <h1 className='text-2xl font-bold text-gray-900'>商品详情页</h1>
      <div className='mt-4 space-y-2 text-gray-700'>
        <p>
          当前请求的商品 ID:{' '}
          <code className='bg-gray-100 px-2 py-0.5 rounded text-red-600 font-mono'>{id}</code>
        </p>
        {coupon && (
          <p>
            检测到包含的优惠券代码:{' '}
            <code className='bg-green-50 px-2 py-0.5 rounded text-green-700 font-mono'>
              {coupon}
            </code>
          </p>
        )}
      </div>

      <div className='mt-8 border-t pt-6'>
        <p className='text-sm text-gray-500'>
          提示：试着在浏览器地址栏修改 ID，或者在末尾加上{' '}
          <span className='font-mono text-blue-600'>?coupon=PRO-MO</span> 看看变化。
        </p>
      </div>
    </div>
  );
}
