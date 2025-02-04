import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Payment, TableColumn } from "./pricing-data"

interface DataTable {
  columns: TableColumn[]
  data: Payment[]
}

export function DataTable({
  columns,
  data,
}: DataTable) {
  return (
    <div className="border rounded-md">
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow className="border-none">
            {columns.map((header) => {
              return (
                <TableHead key={header.accessorKey} className="px-10 py-4 text-lg bg-indigo-100 text-indigo-950 last:text-right">
                  {header.header}
                </TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id} className="hover:scale-x-[102%] hover:px-3 hover:py-5"
            >
              <TableCell className="w-40 px-8 py-5 xl:w-96">{row.captcha}</TableCell>
              <TableCell className="px-8 py-5">{row.price}</TableCell>
              <TableCell className="hidden px-8 py-5 md:block">{row.success}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
