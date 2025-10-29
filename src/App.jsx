import { useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [age, setAge] = useState('')

  const getage = (e) => {
    e.preventDefault()
    if (!date || !month || !year) {
      alert("Fill your Date of Birth")
      return
    }
    if (year < 0 || year > 2025) {
      alert("Give valid Year of Birth")
      return
    }
    let calculatedAge = 2025 - year
    setAge(calculatedAge)
  }

  return (
    <>
      <div>
        <p>Welcome to Age Calculator!</p>
        <form onSubmit={getage}>
          <input type='number' value={date} onChange={(e) => setDate(e.target.value)} />
          <br/><br/>
          <input type='number' value={month} onChange={(e) => setMonth(e.target.value)} />
          <br/><br/>
          <input type='number' value={year} onChange={(e) => setYear(e.target.value)} />
          <br/><br/>
          <button type='submit'>Submit</button>
          <textarea value={age} readOnly />
        </form>
      </div>
    </>
  )
}

export default App
