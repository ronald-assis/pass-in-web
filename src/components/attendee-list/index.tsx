import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from 'lucide-react'

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

      <article className="border-white/10 border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="px-4 py-3 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400"
                />
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Código
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                data do check-in
              </th>
              <th style={{ width: 64 }}></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_e, i) => (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="bg-black/20 rounded size-4 border border-white/10 checked:focus:bg-orange-400 checked:hover:bg-orange-400 checked:bg-orange-400"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">12345</td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Ronald Assis
                    </span>
                    <span>ronaldassis06@gmail.com</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  7 dias atrás
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  3 dias atrás
                </td>
                <td>
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <td className="py-3 px-4" colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td className="py-3 px-4 text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Pag 1 de 23</span>
                <div className="flex gap-1.5">
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </td>
          </tfoot>
        </table>
      </article>
    </section>
  )
}
