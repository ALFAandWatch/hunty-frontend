'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
   filtrosActivos: string[];
   setFiltrosActivos: (filtros: string[]) => void;
   agregarFiltro: (filtro: string) => void;
   eliminarFiltro: (filtro: string) => void;
   limpiarFiltros: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
   const [filtrosActivos, setFiltrosActivos] = useState<string[]>([]);

   const agregarFiltro = (filtro: string) => {
      setFiltrosActivos((prev) =>
         prev.includes(filtro) ? prev : [...prev, filtro]
      );
   };

   const eliminarFiltro = (filtro: string) => {
      setFiltrosActivos((prev) => prev.filter((f) => f !== filtro));
   };

   const limpiarFiltros = () => {
      setFiltrosActivos([]);
   };

   return (
      <FilterContext.Provider
         value={{
            filtrosActivos,
            setFiltrosActivos,
            agregarFiltro,
            eliminarFiltro,
            limpiarFiltros,
         }}
      >
         {children}
      </FilterContext.Provider>
   );
};

export const useFilterContext = () => {
   const context = useContext(FilterContext);
   if (!context) {
      throw new Error('useFilterContext debe usarse dentro de FilterProvider');
   }
   return context;
};
