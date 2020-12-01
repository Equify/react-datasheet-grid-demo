import faker from 'faker'
import { useState } from 'react'
import { DataSheetGrid, textColumn } from 'react-datasheet-grid'
import { Code } from './Code'

const code = `
<DataSheetGrid
  createRow={() => ({ id: genId() })}
  duplicateRow={({ rowData }) => ({ ...rowData, id: genId() })}
  isRowEmpty={({ rowData }) => !rowData.firstName && !rowData.lastName}
/>
`

let nextId = 6

export const UniqId = () => {
  const [ data, setData ] = useState(() => new Array(5).fill(0).map((_, i) => ({
    id: i + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })))

  return (
    <>
      <h2>Having a unique ID on each row</h2>
      <p>
        You can customize the way rows are created and duplicated.
        This is especially useful for keeping a unique ID on each row.
      </p>
      <p>
        When adding keys that are not editable (eg. an ID), it might prevent
        the user from deleting a row because the spreadsheet thinks that the row is not empty.
        This is where <code>isRowEmpty</code> comes into play.
      </p>
      <p>
        Try adding, deleting, and duplicating rows.
      </p>
      <DataSheetGrid
        data={data}
        onChange={setData}
        duplicateRow={({ rowData }) => ({ ...rowData, id: nextId++ })}
        createRow={() => ({ id: nextId++ })}
        isRowEmpty={({ rowData }) => !rowData.firstName && !rowData.lastName}
        columns={[
          textColumn({ key: 'id', title: 'ID', disabled: true }),
          textColumn({ key: 'firstName', title: 'Always' }),
          textColumn({ key: 'lastName', title: 'Conditionally' }),
        ]}
      />
      <Code code={code} />
    </>
  );
}
