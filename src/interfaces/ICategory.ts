export interface ICategory {
   id: string;
   name: string;
   parent: ICategory | null;
   iconUrl?: string;
   children?: ICategory[];
}
