import { ChangeEvent, useEffect, useState } from 'react'
import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from 'lucide-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

import { IconButton } from '../icon-button'
import { Table } from '../table'
import { TableHeader } from '../table/table-header'
import { TableCell } from '../table/table-cell'
import { TableRow } from '../table/table-row'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

const initialStateSearch = () => {
  const url = new URL(window.location.toString())

  if (url.searchParams.has('search')) {
    return url.searchParams.get('search') ?? ''
  }

  return ''
}

const initialStatePage = () => {
  const url = new URL(window.location.toString())

  if (url.searchParams.has('page')) {
    return Number(url.searchParams.get('page'))
  }

  return 1
}

export function AttendeeList() {
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState(initialStateSearch())
  const [page, setPage] = useState(initialStatePage())

  const totalPages = Math.ceil(total / 10)

  useEffect(() => {
    const url = new URL(
      'http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees',
    )
    url.searchParams.set('pageIndex', String(page - 1))

    if (search.length > 0) {
      url.searchParams.set('query', search)
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [page, search])

  const setCurrentSearch = (search: string) => {
    const url = new URL(window.location.toString())

    url.searchParams.set('search', search)
    window.history.pushState({}, '', url)
    setSearch(search)
  }

  const setCurrentPage = (page: number) => {
    const url = new URL(window.location.toString())

    url.searchParams.set('page', String(page))
    window.history.pushState({}, '', url)
    setPage(page)
  }

  const onSearchInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(event.target.value)
    setCurrentPage(1)
  }

  const goToNextPage = () => {
    setCurrentPage(page + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(page - 1)
  }

  const goToFirstPage = () => {
    setCurrentPage(1)
  }

  const goToLastPage = () => {
    setCurrentPage(totalPages)
  }

  return (
    <section className="flex flex-col gap-4">
      <article className="flex gap-3 items-center ">
        <h1 className="text-2xl font-bold">attendee list</h1>
        <div className="px-3 gap-3 py-1.5 border w-72 border-white/10 rounded-lg text-sm flex items-center">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"
            type="text"
            placeholder="Buscar participante..."
            onChange={onSearchInputChanged}
            value={search}
          />
        </div>
      </article>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400 focus:ring-0"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <TableRow key={attendee.id}>
              <TableCell>
                <input
                  type="checkbox"
                  className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400 focus:ring-0"
                />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
              <TableCell>
                {attendee.checkedInAt === null ? (
                  <span className="text-zinc-400">Não fez check-in</span>
                ) : (
                  dayjs().to(attendee.checkedInAt)
                )}
              </TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <TableCell colSpan={3}>
            Mostrando {attendees.length} de {total} itens
          </TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>
                Pag {page} de {totalPages}
              </span>
              <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>

                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>

                <IconButton
                  onClick={goToNextPage}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="size-4" />
                </IconButton>

                <IconButton
                  onClick={goToLastPage}
                  disabled={page === totalPages}
                >
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tfoot>
      </Table>
    </section>
  )
}
