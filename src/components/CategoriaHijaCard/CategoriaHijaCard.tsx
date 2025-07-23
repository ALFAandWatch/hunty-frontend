import Image from 'next/image';

type CategoriaHijaCardProps = {
   name: string;
};

const CategoriaHijaCard = (Props: CategoriaHijaCardProps) => {
   const { name } = Props;
   return (
      <>
         <div className="rounded-lg flex flex-col w-full overflow-hidden shadow-lg border border-white hover:border hover:border-violeta hover:cursor-pointer">
            <div className="relative h-40">
               <Image
                  src="/category/hipermercados.png"
                  alt="Categoria"
                  fill
                  className="object-cover"
               />
            </div>
            <h2 className="text-black p-2">{name}</h2>
         </div>
      </>
   );
};

export default CategoriaHijaCard;
