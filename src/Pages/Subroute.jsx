import { Link } from 'react-router-dom'

export default function Subroute () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-800 to-pink-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <main>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout gap-2'>
            <h1 className='text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800'>
              Hi! Im Secret and I dont like layouts
            </h1>
            <p className='animate-bounce text-3xl'>🤫</p>
            <Link to='/'>
              <button
                type='button'
                className='relative inline-flex items-center px-4 py-2 rounded-md bg-white text-sm font-medium text-gray-700 border-b-4 border-red-600'
              >
                Back home
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
