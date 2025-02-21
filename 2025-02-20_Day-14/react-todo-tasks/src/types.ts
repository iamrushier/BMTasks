export type todoItemType = {
  title?: string;
  id: number;
  status?: boolean;
};
export type todoPropType = {
  data: todoItemType[];
  setData: React.Dispatch<React.SetStateAction<todoItemType[]>>;
};
