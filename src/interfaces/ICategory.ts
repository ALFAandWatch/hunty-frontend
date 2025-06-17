export interface ICategory {
   id: string;
   name: string;
   parent: ICategory | null;
   children?: ICategory[];
}
