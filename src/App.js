import 'react-datasheet-grid/dist/index.css'
import './App.css'
import { Responsive } from './Responsive'
import { UnderlyingData } from './UnderlyingData'
import { DisabledColumns } from './DisabledColumns'
import { LockRows } from './LockRows'
import { ManyRows } from './ManyRows'
import { UniqId } from './UniqId'


function App() {
  return (
    <main className="App">
      <h1>react-datasheet-grid</h1>
      <p>
        <a href="https://github.com/Equify/react-datasheet-grid">GitHub</a>
        <span style={{ padding: '0 10px' }}>|</span>
        <a href="https://www.npmjs.com/package/react-datasheet-grid">NPM</a>
      </p>

      <ManyRows />
      <UnderlyingData />
      <Responsive />
      <LockRows />
      <DisabledColumns />
      <UniqId />
    </main>
  );
}

export default App;
