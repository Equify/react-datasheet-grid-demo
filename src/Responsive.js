import faker from 'faker'
import { useState } from 'react'
import { checkboxColumn, DataSheetGrid, floatColumn, textColumn } from 'react-datasheet-grid'

export const Responsive = () => {
  const [ width, setWidth ] = useState(60)
  const [ data, setData ] = useState(() => new Array(50).fill(0).map((_, i) => ({
    active: faker.random.boolean(),
    name: faker.name.firstName(),
    number: faker.random.number(150),
  })))

  return (
    <>
      <h2>Responsive</h2>
      <p>
        The spreadsheet takes 100% of the div it is in and grows and shrinks with it.
        You can specify how columns should react using known flexbox syntax.
      </p>
      <button style={{ margin: '0 10px 10px 0' }} className='btn' onClick={() => setWidth(40)}>Small</button>
      <button style={{ margin: '0 10px 10px 0' }} className='btn' onClick={() => setWidth(60)}>Medium</button>
      <button style={{ margin: '0 10px 10px 0' }} className='btn' onClick={() => setWidth(100)}>Large</button>
      <div style={{ margin: 'auto', width: `${width}%`}}>
        <DataSheetGrid
          data={data}
          onChange={setData}
          columns={[
            checkboxColumn({ key: 'active', title: 'Boolean', width: .5 }),
            textColumn({ key: 'name', title: 'String' }),
            floatColumn({ key: 'number', title: 'Number', })
          ]}
        />
      </div>
    </>
  );
}
