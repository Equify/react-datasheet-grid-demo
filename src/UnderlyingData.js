import faker from 'faker'
import { useState } from 'react'
import { checkboxColumn, DataSheetGrid, floatColumn, textColumn } from 'react-datasheet-grid'
import { Code } from './Code'

export const UnderlyingData = () => {
  const [ data, setData ] = useState(() => new Array(3).fill(0).map((_, i) => ({
    active: faker.random.boolean(),
    name: faker.name.firstName(),
    number: faker.random.number(150),
  })))

  return (
    <>
      <h2>Simple underlying data</h2>
      <p>You don't need to wrap you data in fancy objects.</p>
      <DataSheetGrid
        data={data}
        onChange={setData}
        columns={[
          checkboxColumn({ key: 'active', title: 'Boolean' }),
          textColumn({ key: 'name', title: 'String' }),
          floatColumn({ key: 'number', title: 'Number', })
        ]}
      />
      <Code
        code={JSON.stringify(data, null, 2)}
        showText='View underlying data'
        hideText='Hide underlying data'
        language='json'
        defaultShow={true}
      />
    </>
  );
}
