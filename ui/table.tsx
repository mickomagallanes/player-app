import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export interface TableColumn {
  header: string;
  key: string;
  cName?: string;
  customRender?: (dataRow: DataRow) => ReactNode;
}

export interface DataRow {
  [key: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  data?: DataRow[];
}

export default function Table({ columns, data = [] }: TableProps): ReactNode {
  const renderTdData = (dataObj: DataRow) => {
    return (
      columns?.length > 0 &&
      columns.map((col) => {
        const mapKey = `${dataObj[col.key]}${col.key}`;
        if (col.customRender) {
          return (
            <TDPadded cName={col.cName} key={mapKey}>
              {col.customRender(dataObj)}
            </TDPadded>
          );
        } else {
          return (
            <TDPadded cName={col.cName} key={mapKey}>
              {dataObj[col.key]}
            </TDPadded>
          );
        }
      })
    );
  };

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
        {data?.length > 0 &&
          data.map((dataObj, i) => (
            <tr
              key={dataObj.id}
              className={cn(
                i < data.length - 1
                  ? "border-b-[0.75px] border-b-gray-500/20"
                  : "",
              )}
            >
              {renderTdData(dataObj)}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function TDPadded({
  children,
  cName = "",
}: {
  children: ReactNode;
  cName?: string;
}) {
  return <td className={cn("p-2 sm:p-4", cName)}>{children}</td>;
}
