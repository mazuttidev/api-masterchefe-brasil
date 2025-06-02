/**
 * @template T
 * @param {T}  parametro genérico para receber uma model
 * @return {T} retorna uma model
 */
export class Result<T> {
  Qtd: number;
  Page: number;
  Total: number;
  Data: Array<T>
}