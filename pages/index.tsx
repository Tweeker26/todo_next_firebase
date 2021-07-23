import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
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
import { Checkbox } from '@rmwc/checkbox';

import Layout from '@/components/Layout';
import { useAuth } from '@/lib/auth';
import fetcher from '@/lib/fetcher';
import { TodoItem } from '@/types/index';

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const { data, error } = useSWR('/api/getTodos', fetcher);

  const [checked, setChecked] = useState<any>({});

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login');
  //   }
  // }, [user]);

  return (
    <Layout user={user}>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell hasFormControl>
                <Checkbox />
              </DataTableHeadCell>
              <DataTableHeadCell>Title</DataTableHeadCell>
              <DataTableHeadCell>Owner</DataTableHeadCell>
              <DataTableHeadCell>Completed</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {data?.map((item: TodoItem, i: number) => (
              <DataTableRow key={i} selected={checked[i]}>
                <DataTableCell hasFormControl>
                  <Checkbox
                    checked={checked[i]}
                    onChange={(evt) => {
                      checked[i] = evt.currentTarget.checked;
                      setChecked({ ...checked });
                    }}
                  />
                </DataTableCell>
                <DataTableCell>{item.title}</DataTableCell>

                <DataTableCell>{item.owner}</DataTableCell>
                <DataTableCell>
                  <Switch checked={item.isComplete} />
                </DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    </Layout>
  );
}
