import { Box } from "@mui/material";
import InputTabela from "./InputTabela";
import { Draggable } from "@hello-pangea/dnd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

interface LinhaTabelaProps {
  dadosLinha: any;
  index: number;
}

export default function LinhaTabela({ dadosLinha, index }: LinhaTabelaProps) {
  return (
    <Draggable draggableId={`${dadosLinha.id_servico}`} index={index}>
      {(provided) => (
        <Box
          className="grid grid-cols-[auto,1fr,1fr,2fr,1fr,1fr,3fr] bg-white items-center rounded-b-sm"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <DragIndicatorIcon className="text-gray-700 mx-2" />
          <InputTabela
            placeholder="Horário"
            defaultValue={dadosLinha.horario_servico}
          />
          <InputTabela
            placeholder="Nome"
            defaultValue={dadosLinha.nome_cliente}
          />
          <InputTabela
            placeholder="Serviço"
            defaultValue={dadosLinha.descricao_servico}
          />
          <InputTabela
            placeholder="Valor"
            defaultValue={dadosLinha.valor_servico}
          />
          <InputTabela
            placeholder="Bairro"
            defaultValue={dadosLinha.bairro_servico}
          />
          <InputTabela
            placeholder="Observação"
            defaultValue={dadosLinha.observacao_servico}
          />
        </Box>
      )}
    </Draggable>
  );
}
