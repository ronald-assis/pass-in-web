import { AttendeeList } from './components/AttendeeList'
import { Header } from './components/Header'

export function App() {
  return (
    <main className="max-w-[1216px] mx-auto py-5">
      <Header />
      <AttendeeList />
    </main>
  )
}
