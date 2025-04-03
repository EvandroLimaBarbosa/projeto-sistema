import { Box } from "@mui/material";
import TitulosTabela from "./TitulosTabela";
import { Droppable } from "@hello-pangea/dnd";
import LinhaTabela from "./LinhaTabela";
import DadosTabelaAgenda from "./DadosTabelaAgenda";

interface TabelaAgendaProps {
  dadosAgenda: any;
}

export default function TabelaAgenda({ dadosAgenda }: TabelaAgendaProps) {
  return (
    <Box className="my-6">
      <DadosTabelaAgenda dadosAgenda={dadosAgenda} />
      <TitulosTabela />
      <Droppable
        droppableId={`id_agenda_${dadosAgenda.id_agenda}`}
        type="list"
        direction="vertical"
      >
        {(provided) => (
          <article ref={provided.innerRef} {...provided.droppableProps}>
            {dadosAgenda.dados_agenda.map((dadosItem: any, index: number) => {
              return (
                <LinhaTabela
                  key={dadosItem.id_servico}
                  dadosLinha={{
                    ...dadosItem,
                    data: dadosItem.data,
                    data_formatada: dadosItem.data_formatada,
                    montador: dadosItem.montador,
                    ajudante: dadosItem.ajudante,
                  }}
                  index={index}
                />
              );
            })}

            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </Box>
  );
}
