import {FormControl,InputLabel,Select, MenuItem, Button, Box} from '@mui/material'
import { useEffect, useState } from 'react'
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

    const {categoria, handlerCategoria} = useNoticias()
  
    
  return (
    <form>
        <FormControl fullWidth>

            <InputLabel>Categoría</InputLabel>
            <Select
            label="Categoría"
            onChange={handlerCategoria}
            value={categoria}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem 
                    key={categoria.value} 
                    value={categoria.value}> {categoria.label} </MenuItem>
                ))}
            </Select>
            <Box sx={{
                marginTop: '1rem'
            }}> 
            <Button
            fullWidth
            variant="contained"
            color="primary"
            >Buscar Noticias</Button>
                
            </Box>
            
        </FormControl>
    </form>
  )
}
export default Formulario