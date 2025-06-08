import { Column } from 'primereact/column';
import { DataTable, type DataTableValue } from 'primereact/datatable';
import React, { type JSX } from 'react';
import '../styles/custom-table.css';

export interface TableWrapperPaginationProps<T> {
  value?: T[];
  meta: {
    page: number;
    total: number;
    pageSize: number;
  };
  withIndexCol?: boolean;
  onChangePage: (page: number) => void;
  breakpoint?: string;
  emptyMessage?: string;
  paddingIndex?: string;
  children?: React.ReactNode;
}

const TableWrapper = <T extends DataTableValue>({
  value: items,
  children,
  withIndexCol,
  meta,
  breakpoint,
  emptyMessage,
  paddingIndex,
}: TableWrapperPaginationProps<T>): JSX.Element => {
  return (
    <>
      <div className="m-2 my-2 flex justify-end">
        {/* Aquí podrías poner filtros o paginación externa si necesitas */}
      </div>
      <div className="border-gray-200 border rounded-lg">
        <DataTable
          value={items}
          tableStyle={{ fontSize: '12px' }}
          emptyMessage={emptyMessage || ' '}
          className="custom-table"
          breakpoint={breakpoint || '910px'}
        >
          {withIndexCol && (
            <Column
              header="#"
              align="center"
              className="w-6"
              style={{ padding: paddingIndex || undefined }}
              body={(_, { rowIndex }): number =>
                rowIndex + 1 + (meta.page - 1) * meta.pageSize
              }
            />
          )}
          {children}
        </DataTable>
      </div>
    </>
  );
};

export default TableWrapper;
