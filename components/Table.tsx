import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import {
  DataTable,
  DataTableContent,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeadCell,
  DataTableRow,
} from '@rmwc/data-table';
import { Switch } from '@rmwc/switch';
import { Button } from '@rmwc/button';

import { useAuth } from '@/lib/auth';
import firebase from '@/lib/firebase';
import { TodoItem } from '@/types/index';
import fetcher from '@/lib/fetcher';

import styles from '@/styles/DataTable.module.css';
import Dialog from '@/components/Dialog';

const { Timestamp } = firebase.firestore;

const Table = () => {
  const { data } = useSWR('/api/getTodos', fetcher);
  const { user } = useAuth();
  const [isOpenDialogId, setIsOpenDialogId] = useState<string | null>(null);
  const sortedFilteredData = data
    ?.filter((item: TodoItem) => item.owner === user?.uid)
    .sort(
      (a: TodoItem, b: TodoItem) =>
        new Timestamp(b.createdAt.seconds, b.createdAt.nanoseconds).toMillis() -
        new Timestamp(a.createdAt.seconds, a.createdAt.nanoseconds).toMillis()
    );

  const handleDelete = async (id: string) => {
    const deletedTodo = await fetch('/api/deleteTodo', {
      method: 'DELETE',
      body: id,
    }).then((res) => res.json());
    console.log('deleted Todo', deletedTodo);
    mutate('/api/getTodos');
  };

  const handleComplete = async (id: string, isComplete: boolean) => {
    const changedTodo = await fetch('/api/completeTodo', {
      method: 'PUT',
      body: JSON.stringify({ id, isComplete }),
    }).then((res) => res.json());
    console.log('changed Todo', changedTodo);
    mutate('/api/getTodos');
  };

  return (
    <>
      <DataTable className={styles.table}>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Title</DataTableHeadCell>
              <DataTableHeadCell>Owner</DataTableHeadCell>
              <DataTableHeadCell>Completed</DataTableHeadCell>
              <DataTableHeadCell>Delete</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {sortedFilteredData?.map((item: TodoItem, i: number) => (
              <DataTableRow key={item.id} activated={item.isComplete}>
                <DataTableCell>{item.title}</DataTableCell>

                <DataTableCell>{item.owner}</DataTableCell>
                <DataTableCell>
                  <Switch
                    checked={item.isComplete}
                    onChange={(e) => handleComplete(item.id, e.currentTarget.checked)}
                  />
                </DataTableCell>
                <DataTableCell hasFormControl>
                  <Button icon={{ icon: 'delete' }} onClick={() => setIsOpenDialogId(item.id)} />
                </DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
      <Dialog
        open={Boolean(isOpenDialogId)}
        setOpen={setIsOpenDialogId}
        title="Delete todo"
        content="Are you sure?"
        action={() => handleDelete(isOpenDialogId!)}
      />
    </>
  );
};

export default Table;
