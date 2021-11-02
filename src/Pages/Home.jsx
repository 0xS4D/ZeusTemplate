import Socials from '@/Components/Socials'
import RouterExample from '@/Components/RouterExample'
import Logo from '@/Assets/favicon.png'

export default function Home () {
  return (
    <>
      <div className='min-h-screen bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <main>
            <div className='flex flex-col items-center justify-center min-h-screen text-white layout gap-2'>
              <img src={Logo} className='-mt-40' alt='Logo' draggable={false}/>
              <h1 className='text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800'>
                Starter using Vite, React, Tailwind, Eslint and Router.
                <p className='text-base'>By EternumZeta</p>
              </h1>
              <br />
              <RouterExample current={'Home'} />
              <br />
              <footer className='absolute text-gray-300 bottom-10'>
                <Socials />
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
