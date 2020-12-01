import faker from 'faker'
import { useState } from 'react'
import { checkboxColumn, DataSheetGrid, floatColumn, textColumn, progressColumn } from 'react-datasheet-grid'
import { Code } from './Code'

const code = `
export const MyComponent = () => {
  const [ data, setData ] = useState([
    { 
      active: true, 
      firstName: 'Elon', 
      lastName: 'Musk', 
      number: 42, 
    },
    // ...
  ])

  return (
    <DataSheetGrid
      data={data}
      onChange={setData}
      columns={[
        checkboxColumn({ key: 'active', title: 'Active' }),
        textColumn({ key: 'firstName', title: 'First name' }),
        // ...
      ]}
    />
  );
}
`

export const ManyRows = () => {
  const [ data, setData ] = useState(() => new Array(100000).fill(0).map(() => ({
    active: faker.random.boolean(),
    progress: faker.random.number(100) / 100,
    number: faker.random.number(200),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    title: faker.name.title(),
    job: faker.name.jobType(),
  })))

  return (
    <>
      <h2>100,000 rows</h2>
      <p>Rows are virtualized, display performance is not impacted by the number of rows.</p>
      <DataSheetGrid
        data={data}
        gutterColumnWidth='0 0 75px'
        onChange={setData}
        columns={[
          checkboxColumn({ key: 'active', title: 'Active', width: '0 0 60px' }),
          textColumn({ key: 'firstName', title: 'First name', minWidth: 200 }),
          textColumn({ key: 'lastName', title: 'Last name', minWidth: 200 }),
          progressColumn({ key: 'progress', title: 'Progress', minWidth: 150 }),
          floatColumn({ key: 'number', title: 'Number', minWidth: 150 }),
          textColumn({ key: 'title', title: 'Title', minWidth: 200 }),
          textColumn({ key: 'job', title: 'Job', minWidth: 200 }),
        ]}
      />
      <Code code={code} />
    </>
  );
}
