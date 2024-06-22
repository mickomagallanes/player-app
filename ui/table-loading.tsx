import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface DataRow {
  [key: string]: any;
}

interface TableColumn {
  header: string;
  key: string;
  cName?: string;
  customRender?: (dataRow: DataRow) => ReactNode;
}

export default function TableLoading({ columns }: { columns: TableColumn[] }) {
  return (
    <table className="w-full">
      <thead className="text-center text-sm">
        <tr className="border-b-[0.75px] border-b-gray-500/20">
          {columns?.length > 0 &&
            columns.map(({ key, header, cName }) => (
              <th className={cn("p-3 sm:p-4", cName)} key={key}>
                {header}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="overflow-scroll text-center text-xs sm:text-sm">
        <tr>
          <td colSpan={columns?.length} className={"p-2 text-center sm:p-4"}>
            <div className="animate-pulse rounded-md bg-neutral-200 p-4"></div>
          </td>
        </tr>
        <tr>
          <td colSpan={columns?.length} className={"p-2 text-center sm:p-4"}>
            <div className="animate-pulse rounded-md bg-neutral-200 p-4"></div>
          </td>
        </tr>
        <tr>
          <td colSpan={columns?.length} className={"p-2 text-center sm:p-4"}>
            <div className="animate-pulse rounded-md bg-neutral-200 p-4"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
