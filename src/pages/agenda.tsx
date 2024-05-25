import { Box } from "@mui/material";
import Layout from "../components/template/Layout";
import TabelaAgenda from "../components/template/TabelaAgenda";
import { useState } from "react";

export default function agenda() {
  const [dados, setDados] = useState(
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
            nome_cliente: 'João',
          },
          {
            id_servico: 3,
            descricao_servico: 'Porta 1 Folha',
            horario_servico: '14:00',
            valor_servico: '200,00',
            bairro_servico: 'Santa Felicidade',
            observacao_servico: 'Cachorro no quintal',
            nome_cliente: 'Maria',
          },
          {
            id_servico: 4,
            descricao_servico: 'Janela 2 Folhas',
            horario_servico: '16:30',
            valor_servico: '300,00',
            bairro_servico: 'Bacacheri',
            observacao_servico: 'Deixar na garagem',
            nome_cliente: 'Carlos',
          },
          {
            id_servico: 5,
            descricao_servico: 'Porta 3 Folhas',
            horario_servico: '09:15',
            valor_servico: '400,00',
            bairro_servico: 'Água Verde',
            observacao_servico: 'Tocar campainha',
            nome_cliente: 'Ana',
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
            nome_cliente: 'João',
          },
          {
            id_servico: 13,
            descricao_servico: 'Porta 1 Folha',
            horario_servico: '14:00',
            valor_servico: '200,00',
            bairro_servico: 'Santa Felicidade',
            observacao_servico: 'Cachorro no quintal',
            nome_cliente: 'Maria',
          },
          {
            id_servico: 14,
            descricao_servico: 'Janela 2 Folhas',
            horario_servico: '16:30',
            valor_servico: '300,00',
            bairro_servico: 'Bacacheri',
            observacao_servico: 'Deixar na garagem',
            nome_cliente: 'Carlos',
          },
          {
            id_servico: 15,
            descricao_servico: 'Porta 3 Folhas',
            horario_servico: '09:15',
            valor_servico: '400,00',
            bairro_servico: 'Água Verde',
            observacao_servico: 'Tocar campainha',
            nome_cliente: 'Ana',
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
            nome_cliente: 'João',
          },
          {
            id_servico: 23,
            descricao_servico: 'Porta 1 Folha',
            horario_servico: '14:00',
            valor_servico: '200,00',
            bairro_servico: 'Santa Felicidade',
            observacao_servico: 'Cachorro no quintal',
            nome_cliente: 'Maria',
          },
          {
            id_servico: 24,
            descricao_servico: 'Janela 2 Folhas',
            horario_servico: '16:30',
            valor_servico: '300,00',
            bairro_servico: 'Bacacheri',
            observacao_servico: 'Deixar na garagem',
            nome_cliente: 'Carlos',
          },
          {
            id_servico: 25,
            descricao_servico: 'Porta 3 Folhas',
            horario_servico: '09:15',
            valor_servico: '400,00',
            bairro_servico: 'Água Verde',
            observacao_servico: 'Tocar campainha',
            nome_cliente: 'Ana',
          },
        ]
      }
    ]
  )

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
        {dados.map(dadosAgenda => {
          return <TabelaAgenda key={dadosAgenda.id_agenda} dadosAgenda={dadosAgenda.dados_agenda} />
        })}
      </Box>
    </Layout>)
}