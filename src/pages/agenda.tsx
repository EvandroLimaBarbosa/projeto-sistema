import { Box } from "@mui/material";
import Layout from "../components/template/Layout";
import { useState } from "react";
import TabelaAgenda from "../components/tabela/TabelaAgenda";
import { DragDropContext } from "@hello-pangea/dnd";

interface Servico {
  id_servico: number;
  descricao_servico: string;
  horario_servico: string;
  valor_servico: string;
  bairro_servico: string;
  observacao_servico: string;
  nome_cliente: string;
};

interface Agenda {
  id_agenda: number;
  data_agenda: string;
  dados_agenda: Servico[];
};

type AgendaArray = Agenda[];

export default function agenda() {
  const [dados, setDados] = useState<Agenda[]>(
    [
      {
        id_agenda: 1,
        data_agenda: '26/05/2024',
        dados_agenda: [
          {
            id_servico: 2,
            descricao_servico: 'Janela 4 Folhas',
            horario_servico: '10:45',
            valor_servico: '350,00',
            bairro_servico: 'Boa Vista',
            observacao_servico: 'Interfone não funciona',
            nome_cliente: 'João1',
          },
          {
            id_servico: 3,
            descricao_servico: 'Porta 1 Folha',
            horario_servico: '14:00',
            valor_servico: '200,00',
            bairro_servico: 'Santa Felicidade',
            observacao_servico: 'Cachorro no quintal',
            nome_cliente: 'Maria1',
          },
          {
            id_servico: 4,
            descricao_servico: 'Janela 2 Folhas',
            horario_servico: '16:30',
            valor_servico: '300,00',
            bairro_servico: 'Bacacheri',
            observacao_servico: 'Deixar na garagem',
            nome_cliente: 'Carlos1',
          },
          {
            id_servico: 5,
            descricao_servico: 'Porta 3 Folhas',
            horario_servico: '09:15',
            valor_servico: '400,00',
            bairro_servico: 'Água Verde',
            observacao_servico: 'Tocar campainha',
            nome_cliente: 'Ana1',
          },
        ]
      },
      {
        id_agenda: 2,
        data_agenda: '26/05/2024',
        dados_agenda: [
          {
            id_servico: 12,
            descricao_servico: 'Janela 4 Folhas',
            horario_servico: '10:45',
            valor_servico: '350,00',
            bairro_servico: 'Boa Vista',
            observacao_servico: 'Interfone não funciona',
            nome_cliente: 'João2',
          },
          {
            id_servico: 13,
            descricao_servico: 'Porta 1 Folha',
            horario_servico: '14:00',
            valor_servico: '200,00',
            bairro_servico: 'Santa Felicidade',
            observacao_servico: 'Cachorro no quintal',
            nome_cliente: 'Maria2',
          },
          {
            id_servico: 14,
            descricao_servico: 'Janela 2 Folhas',
            horario_servico: '16:30',
            valor_servico: '300,00',
            bairro_servico: 'Bacacheri',
            observacao_servico: 'Deixar na garagem',
            nome_cliente: 'Carlos2',
          },
          {
            id_servico: 15,
            descricao_servico: 'Porta 3 Folhas',
            horario_servico: '09:15',
            valor_servico: '400,00',
            bairro_servico: 'Água Verde',
            observacao_servico: 'Tocar campainha',
            nome_cliente: 'Ana2',
          },
        ]
      },
      {
        id_agenda: 3,
        data_agenda: '26/05/2024',
        dados_agenda: [
          {
            id_servico: 22,
            descricao_servico: 'Janela 4 Folhas',
            horario_servico: '10:45',
            valor_servico: '350,00',
            bairro_servico: 'Boa Vista',
            observacao_servico: 'Interfone não funciona',
            nome_cliente: 'João3',
          },
          {
            id_servico: 23,
            descricao_servico: 'Porta 1 Folha',
            horario_servico: '14:00',
            valor_servico: '200,00',
            bairro_servico: 'Santa Felicidade',
            observacao_servico: 'Cachorro no quintal',
            nome_cliente: 'Maria3',
          },
          {
            id_servico: 24,
            descricao_servico: 'Janela 2 Folhas',
            horario_servico: '16:30',
            valor_servico: '300,00',
            bairro_servico: 'Bacacheri',
            observacao_servico: 'Deixar na garagem',
            nome_cliente: 'Carlos3',
          },
          {
            id_servico: 25,
            descricao_servico: 'Porta 3 Folhas',
            horario_servico: '09:15',
            valor_servico: '400,00',
            bairro_servico: 'Água Verde',
            observacao_servico: 'Tocar campainha',
            nome_cliente: 'Ana3',
          },
        ]
      }
    ]
  )

  function reorder(list: AgendaArray, source: any, destination: any) {
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
    })

    const [removed] = result[startIndexAgenda].dados_agenda.splice(source.index, 1);
    result[endIndexAgenda].dados_agenda.splice(destination.index, 0, removed);

    return result;
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(dados, result.source, result.destination);

    setDados(items);
  }

  return (
    <Layout title="Agenda"
      subtitle="Aqui você irá gerenciar a sua agenda">
      <Box className={`
        flex
        flex-col
        items-center
        justify-center
        min-h-dvh
        bg-neutral-300
        text-black
      `}>
        <DragDropContext onDragEnd={onDragEnd}>
          {dados.map(dadosAgenda => {
            return <TabelaAgenda key={dadosAgenda.id_agenda} dadosAgenda={dadosAgenda} />
          })}
        </DragDropContext>
      </Box>
    </Layout>)
}