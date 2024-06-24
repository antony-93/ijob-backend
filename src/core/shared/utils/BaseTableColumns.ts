import { TableColumn } from "typeorm";

export const BaseTableColumns = [
    new TableColumn({
        name: "cadastrado_em",
        type: "timestamp",
        default: "now()",
    }),
    new TableColumn({
        name: "atualizado_em",
        type: "timestamp",
        default: "now()",
        onUpdate: "now()",
    }),
];
