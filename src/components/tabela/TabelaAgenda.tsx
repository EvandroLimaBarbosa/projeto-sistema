import { Box } from "@mui/material";
import TitulosTabela from "./TitulosTabela";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import LinhaTabela from "./LinhaTabela";

interface TabelaAgendaProps {
    dadosAgenda: any;
}

export default function TabelaAgenda({ dadosAgenda }: TabelaAgendaProps) {
    return (
        <Box className="my-6">
            <TitulosTabela />
            <Droppable droppableId={`id_agenda_${dadosAgenda.id_agenda}`} type="list" direction="vertical">
                {(provided) => (
                    <article
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {dadosAgenda.dados_agenda.map((dadosItem: any, index: number) => {
                            return <LinhaTabela key={dadosItem.id_servico} dadosLinha={dadosItem} index={index} />
                        })}

                        {provided.placeholder}
                    </article>
                )}
            </Droppable>
        </Box>
    )
}