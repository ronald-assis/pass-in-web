import { ComponentProps } from 'react'

interface TableProps extends ComponentProps<'table'> {}

export function Table(props: TableProps) {
  return (
    <article className="border-white/10 border rounded-lg">
      <table className="w-full" {...props} />
    </article>
  )
}
