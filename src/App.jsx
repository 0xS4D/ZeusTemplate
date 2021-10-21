import { useRoutes } from 'react-router-dom'
import { Routes } from '@/Routes/Routes'

export default function App () {
  const View = useRoutes(Routes)
  return View
}
