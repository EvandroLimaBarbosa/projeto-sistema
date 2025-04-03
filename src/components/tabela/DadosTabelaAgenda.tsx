import { Box, Typography } from "@mui/material";

interface DadosTabelaAgendaProps {
  dadosAgenda: any;
}

export default function DadosTabelaAgenda({
  dadosAgenda,
}: DadosTabelaAgendaProps) {
  return (
    <Box
      className="flex items-center bg-gradient-to-r from-blue-950 via-blue-950 to-blue-900 text-white h-10 rounded-t-md"
      paddingX={2}
    >
      <Box className="flex justify-center w-1/4">
        <Typography variant="body1" align="center">
          {dadosAgenda.data}
        </Typography>
      </Box>
      <Box className="flex justify-center w-1/4">
        <Typography variant="body1" align="center">
          {dadosAgenda.data_formatada}
        </Typography>
      </Box>
      <Box className="flex justify-center w-1/4">
        <Typography variant="body1" align="center">
          {dadosAgenda.montador}
        </Typography>
      </Box>
      <Box className="flex justify-center w-1/4">
        <Typography variant="body1" align="center">
          {dadosAgenda.ajudante}
        </Typography>
      </Box>
    </Box>
  );
}
