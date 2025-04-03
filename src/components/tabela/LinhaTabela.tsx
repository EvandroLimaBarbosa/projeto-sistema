import { Box, IconButton, Paper } from "@mui/material";
import InputTabela from "./InputTabela";
import { Draggable } from "@hello-pangea/dnd";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface LinhaTabelaProps {
    dadosLinha: any;
    index: number;
}

export default function LinhaTabela({ dadosLinha, index }: LinhaTabelaProps) {
    return (
        <Draggable draggableId={`${dadosLinha.id_servico}`} index={index}>
            {(provided) => (
                <Box className="flex flex-row bg-white justify-center items-center rounded-b-sm"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <DragIndicatorIcon className="w-8 text-gray-700"></DragIndicatorIcon>
                    <InputTabela placeholder="Horário" className='w-24' defaultValue={dadosLinha.horario_servico} />
                    <InputTabela placeholder="Nome" className='w-28' defaultValue={dadosLinha.nome_cliente} />
                    <InputTabela placeholder="Serviço" className='w-40' defaultValue={dadosLinha.descricao_servico} />
                    <InputTabela placeholder="Valor" className='w-28' defaultValue={dadosLinha.valor_servico} />
                    <InputTabela placeholder="Bairro" className='w-28' defaultValue={dadosLinha.bairro_servico} />
                    <InputTabela placeholder="Observação" className='w-60' defaultValue={dadosLinha.observacao_servico} />
                </Box>
            )}
        </ Draggable>
    );
}