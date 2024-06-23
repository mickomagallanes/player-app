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

const createTrSkeleton = (columnsLength: number) => {
  const gridArr = [];

  for (let i = 0; i < 6; i++) {
    gridArr.push(
      <tr key={i}>
        <td colSpan={columnsLength} className={"p-2 text-center md:p-3"}>
          <div className="animate-pulse rounded-md bg-neutral-200 p-3"></div>
        </td>
      </tr>,
    );
  }

  return gridArr;
};

export default function TableLoading({ columns }: { columns: TableColumn[] }) {
  return (
    <table className="w-full">
      <thead className="text-center text-sm">
        <tr className="border-b-[0.0469rem] border-b-gray-500/20">
          {columns?.length > 0 &&
            columns.map(({ key, header, cName }) => (
              <th className={cn("p-3 md:p-4", cName)} key={key}>
                {header}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="overflow-scroll text-center text-xs md:text-sm">
        {createTrSkeleton(columns.length)}
      </tbody>
    </table>
  );
}
