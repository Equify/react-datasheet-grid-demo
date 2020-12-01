import faker from 'faker'
import { useState } from 'react'
import { checkboxColumn, DataSheetGrid, textColumn } from 'react-datasheet-grid'
import { Code } from './Code'

const code = `
<DataSheetGrid lockRows />
`

export const LockRows = () => {
  const [ data, setData ] = useState(() => new Array(5).fill(0).map(() => ({
    active: faker.random.boolean(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })))

  return (
    <>
      <h2>Lock rows</h2>
      <p>
        It might be desirable to lock rows. Here the user cannot insert or delete rows,
        even when using keyboard shortcuts or when pasting large data-set.
      </p>
      <DataSheetGrid
        data={data}
        onChange={setData}
        lockRows={true}
        columns={[
          checkboxColumn({ key: 'active', title: 'Active' }),
          textColumn({ key: 'firstName', title: 'Always' }),
          textColumn({ key: 'lastName', title: 'Conditionally' }),
        ]}
      />
      <Code code={code} />
    </>
  );
}
