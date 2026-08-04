import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-900 text-white p-4 rounded-xl mb-4'>
        Cards Information
      </h1>

      <div className="flex gap-6 justify-center">
        <Card username="Hafiz Ikrash" btnText="click me" />
        <Card username="ikrash" btnText="click it!" />
        <Card username="kashi" btnText="just click" />
      </div>
    </>
  )
}

export default App