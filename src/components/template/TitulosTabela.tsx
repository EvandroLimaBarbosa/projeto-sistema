import { Box, Typography } from '@mui/material'

export default function TitulosTabela() {
    return (
        <Box className={`flex flex-row bg-gradient-to-r from-blue-950 via-blue-950 to-blue-900 text-white h-10 items-center rounded-t-md`}>
            <Typography variant="body1" className='flex justify-center w-24'> Horário </Typography>
            <Typography variant="body1" className='flex justify-center w-28'> Nome </Typography>
            <Typography variant="body1" className='flex justify-center w-40'> Serviço </Typography>
            <Typography variant="body1" className='flex justify-center w-28'> Valor </Typography>
            <Typography variant="body1" className='flex justify-center w-28'> Bairro </Typography>
            <Typography variant="body1" className='flex justify-center w-60'> Observação </Typography>
        </Box>
    )
}
