'use client'

import Link from 'next/link'

export default function ErrorContainer({
  error,
  reset
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {
  console.error(error)

  // __RENDER
  return (
    <div className='container min-h-svh'>
      <div className='grid justify-center gap-1 pt-64 text-center'>
        <h1 className='mb-4 text-9xl font-extrabold'>Oops!</h1>
        <h3 className='text-3xl font-bold text-white/75 capitalize'>unexpected error</h3>
        <p className='text-white/75'>An error occurred and you request couldn't be completed.</p>
        <code className='mirror text-foreground-500 mt-4 max-w-[440px] rounded-xs p-4'>{error?.message}</code>

        <div className='mt-8 flex justify-center gap-4'>
          <button className='h-7 bg-white px-3 text-black hover:underline' onClick={reset}>
            <span className='font-semibold'>Try again</span>
          </button>

          <Link className='h-7 text-white/75' href='/'>
            <span className='font-semibold underline'>Go back home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
