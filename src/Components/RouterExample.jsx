import { Link } from 'react-router-dom'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example (props) {
  return (
    <span className='relative z-0 inline-flex shadow-sm rounded-md space-x-1'>
      <Link to='/'>
        <button
          type='button'
          className={classNames(
            props.current === 'Home'
              ? 'border-b-4 border-red-600'
              : 'border border-gray-300',
            'relative inline-flex items-center px-4 py-2 rounded-md bg-white text-sm font-medium text-gray-700'
          )}
        >
          Home
        </button>
      </Link>
      <Link to='/layout'>
        <button
          type='button'
          className={classNames(
            props.current === 'Layout'
              ? 'border-b-4 border-red-600'
              : 'border border-gray-300',
            'relative inline-flex items-center px-4 py-2 rounded-md bg-white text-sm font-medium text-gray-700'
          )}
        >
          Layout
        </button>
      </Link>
    </span>
  )
}
