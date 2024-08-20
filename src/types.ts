export interface IList {
  text: string;
  checked: boolean;
  id: number;
  __typname?: string;
}

export interface AllTodosCache {
  allTodos: IList[];
}
