import { ChangeEvent, useState } from 'react'
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
import { attendees } from '../../data/attendees'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  const onSearchInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const goToNextPage = () => {
    setPage(page + 1)
  }

  const goToPreviousPage = () => {
    setPage(page - 1)
  }

  const goToFirstPage = () => {
    setPage(1)
  }

  const goToLastPage = () => {
    setPage(totalPages)
  }

  return (
    <section className="flex flex-col gap-4">
      <article className="flex gap-3 items-center ">
        <h1 className="text-2xl font-bold">attendee list</h1>
        <div className="px-3 gap-3 py-1.5 border w-72 border-white/10 rounded-lg text-sm flex items-center">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            type="text"
            placeholder="Buscar participante..."
            onChange={onSearchInputChanged}
          />
        </div>
        {search}
      </article>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400"
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <TableRow key={attendee.id}>
              <TableCell>
                <input
                  type="checkbox"
                  className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400"
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
              <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
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
            Mostrando 10 de {attendees.length} itens
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
