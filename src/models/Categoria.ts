import type Produto from "./Produto.ts";

export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    produto?: Produto[] | null;
}