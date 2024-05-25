import { Box } from "@mui/material";
import LinhaTabela from "./LinhaTabela";
import TitulosTabela from "./TitulosTabela";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";

interface TabelaAgendaProps {
    dadosAgenda: any;
}

export default function TabelaAgenda({ dadosAgenda }: TabelaAgendaProps) {
    const [dados, setDados] = useState(dadosAgenda)

    function reorder<T>(list: T[], startIndex: number, endIndex: number) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(dados, result.source.index, result.destination.index);

        setDados(items);
    }


    return (
        <Box className="my-6">
            <TitulosTabela />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="agenda" type="list" direction="vertical">
                    {(provided) => (
                        <article
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {dados.map((dadosItem: any, index: number) => {
                                return <LinhaTabela key={dadosItem.id_servico} dadosLinha={dadosItem} index={index} />
                            })}

                            {provided.placeholder}
                        </article>
                    )}
                </Droppable>
            </DragDropContext>
        </Box>
    )
}