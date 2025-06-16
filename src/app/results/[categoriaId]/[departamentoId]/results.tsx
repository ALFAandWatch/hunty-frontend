'use client';
import { useParams } from 'next/navigation';

const Results = () => {
   const { categoriaId, departamentoId } = useParams();

   return <h2 className="text-red-600 text-8xl">RESULTS!</h2>;
};

export default Results;
