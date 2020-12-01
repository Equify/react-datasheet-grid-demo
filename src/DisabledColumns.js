import faker from 'faker'
import { useState } from 'react'
import { checkboxColumn, DataSheetGrid, textColumn } from 'react-datasheet-grid'
import { Code } from './Code'

const code = `
<DataSheetGrid
  columns={[
    checkboxColumn({ key: 'active', title: 'Active' }),
    textColumn({ 
      key: 'firstName', 
      title: 'First name', 
      disabled: true, 
    }),
    textColumn({ 
      key: 'lastName', 
      title: 'Last name', 
      disabled: ({ rowData }) => !rowData.active, 
    }),
  ]}
/>
`

export const DisabledColumns = () => {
  const [ data, setData ] = useState(() => new Array(20).fill(0).map(() => ({
    active: faker.random.boolean(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })))

  return (
    <>
      <h2>Disable columns or cells</h2>
      <p>
        Columns can be disabled entirely, or on a per-row condition.
        Try toggling the "active" column.
      </p>
      <p>
        Disabling a column prevents the user from editing its cells, including any pasting or deleting operation.
        The user can still copy the value of a disabled column.
      </p>
      <DataSheetGrid
        data={data}
        onChange={setData}
        columns={[
          checkboxColumn({ key: 'active', title: 'Active' }),
          textColumn({ key: 'firstName', title: 'Always', disabled: true }),
          textColumn({ key: 'lastName', title: 'Conditionally', disabled: ({ rowData }) => !rowData.active }),
        ]}
      />
      <Code code={code} />
    </>
  );
}
