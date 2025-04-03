import { Box } from "@mui/material";
import Layout from "../components/template/Layout";
import { useState } from "react";
import TabelaAgenda from "../components/tabela/TabelaAgenda";
import { DragDropContext } from "@hello-pangea/dnd";
import { mockDadosAgenda } from "../mock/mockDadosAgenda";

export default function agenda() {
  const [dados, setDados] = useState(mockDadosAgenda);

  function reorder(
    list: typeof mockDadosAgenda,
    source: any,
    destination: any
  ) {
    const result = Array.from(list);
    let startIndexAgenda = 0;
    let startDroppableIdServico: any;
    let endIndexAgenda = 0;
    let endDroppableIdServico: any;

    result.forEach((item, index) => {
      if (`id_agenda_${item.id_agenda}` === source.droppableId) {
        startIndexAgenda = index;
        startDroppableIdServico = item.dados_agenda[source.index];
      }
      if (`id_agenda_${item.id_agenda}` === destination.droppableId) {
        endIndexAgenda = index;
        endDroppableIdServico = item.dados_agenda[destination.index];
      }
    });

    const [removed] = result[startIndexAgenda].dados_agenda.splice(
      source.index,
      1
    );
    result[endIndexAgenda].dados_agenda.splice(destination.index, 0, removed);

    return result;
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(dados, result.source, result.destination);

    setDados(items);
  };

  return (
    <Layout title="Agenda" subtitle="Aqui você irá gerenciar a sua agenda">
      <Box
        className={`flex flex-col items-center justify-center min-h-dvh text-black`}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {dados.map((dadosAgenda) => {
            return (
              <TabelaAgenda
                key={dadosAgenda.id_agenda}
                dadosAgenda={dadosAgenda}
              />
            );
          })}
        </DragDropContext>
      </Box>
    </Layout>
  );
}
