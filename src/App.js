import { useState } from "react";
import { Typography, TextField, Container } from "@mui/material";

function App() {

  const [decimal, setDecimal] = useState('')
  const [binario, setBinario] = useState('')
  const [octal, setOctal] = useState('')
  const [hexadecimal, setHexadecimal] = useState('')

  const putDecimal = (e) => {
    const value = e.target.value
    setDecimal(value)
    setBinario(convert(value, 10, 2))
    setOctal(convert(value, 10, 8))
    setHexadecimal(convert(value, 10, 16).toUpperCase())
    if (value === '') reset()
  }

  const putBinario = (e) => {
    const value = e.target.value
    setBinario(value)
    setDecimal(convert(value, 2, 10))
    setOctal(convert(value, 2, 8))
    setHexadecimal(convert(value, 2, 16).toUpperCase())
    if (value === '') reset()
  }

  const putOctal = (e) => {
    const value = e.target.value
    setOctal(value)
    setBinario(convert(value, 8, 2))
    setDecimal(convert(value, 8, 10))
    setHexadecimal(convert(value, 8, 16).toUpperCase())
    if (value === '') reset()
  }

  const putHexadecimal = (e) => {
    const value = e.target.value
    setHexadecimal(value)
    setBinario(convert(value, 16, 2))
    setOctal(convert(value, 16, 8))
    setDecimal(convert(value, 16, 10))
    if (value === '') reset()
  }

  const convert = (value,sourceBase,targetBase) => {
    return Number(parseInt(value,sourceBase)).toString(targetBase)
  }

  const reset = () => {
    setDecimal('')
    setBinario('')
    setOctal('')
    setHexadecimal('')
  }

  return (
    <div className="App">
      <Container>
        <Typography variant="h4">Conversor de Numeros</Typography>
          <TextField type="number" label="Decimal" variant="standard" fullWidth sx={{ mt:2 }}
            value={decimal} onChange={putDecimal}
          />
          <TextField type="number" label="Binario" variant="standard" fullWidth sx={{ mt:3 }}
            value={binario} onChange={putBinario}
          />
          <TextField type="number" label="Octal" variant="standard" fullWidth sx={{ mt:3 }}
            value={octal} onChange={putOctal} 
          />
          <TextField type="text" label="Hexadecimal" variant="standard" fullWidth sx={{ mt:3 }}
            value={hexadecimal} onChange={putHexadecimal}
          />
      </Container>
    </div>
  )
}

export default App