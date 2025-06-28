import ListaCategoriasHijas from '@/components/ListaCategoriasHijas/ListaCategoriasHijas';
import ListaCategoriasPadre from '@/components/ListaCategoriasPadre/ListaCategoriasPadre';
import SearchForm from '@/components/SearchForm/SearchForm';

const Categorias = () => {
   return (
      <>
         <div className="w-full bg-azul-Main flex justify-center items-center h-[10rem]">
            <h1 className="text-white text-3xl font-(family-name:--font-open-sans) font-bold">
               Categorias
            </h1>
         </div>
         <div className="flex flex-col items-center bg-gray-100">
            <div className="-mt-7 max-h-fit">
               <SearchForm />
            </div>
            <div className="w-[77%] mx-auto mt-15 flex">
               <div>
                  <ListaCategoriasPadre />
               </div>
               <div>
                  <ListaCategoriasHijas />
               </div>
            </div>
         </div>
      </>
   );
};

export default Categorias;
