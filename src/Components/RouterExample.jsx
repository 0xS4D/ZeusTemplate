import { Link } from 'react-router-dom'

export default function RouterExample (props) {
  return (
    <div>
      <button>
        <Link
          to={props.to}
          className='relative inline-flex items-center px-4 py-2 rounded-md bg-white text-sm font-medium text-gray-700 border-b-4 border-red-600'
        >
          {props.text}
        </Link>
      </button>
    </div>
  )
}
