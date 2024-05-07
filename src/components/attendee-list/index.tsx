import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from 'lucide-react'
import { IconButton } from '../icon-button'
import { Table } from '../table'
import { TableHeader } from '../table/table-header'
import { TableCell } from '../table/table-cell'
import { TableRow } from '../table/table-row'

export function AttendeeList() {
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
          />
        </div>
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
          {Array.from({ length: 10 }).map((_e, i) => (
            <TableRow key={i}>
              <TableCell>
                <input
                  type="checkbox"
                  className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400"
                />
              </TableCell>
              <TableCell>12345</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Ronald Assis</span>
                  <span>ronaldassis06@gmail.com</span>
                </div>
              </TableCell>
              <TableCell>7 dias atrás</TableCell>
              <TableCell>3 dias atrás</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>Pag 1 de 23</span>
              <div className="flex gap-1.5">
                <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronsLeft className="size-4" />
                </IconButton>

                <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronLeft className="size-4" />
                </IconButton>

                <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronRight className="size-4" />
                </IconButton>

                <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
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
