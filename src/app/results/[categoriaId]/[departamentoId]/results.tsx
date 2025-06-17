import ActiveFilter from '@/components/ActiveFilter/ActiveFilter';
import FilterSelector from '@/components/FilterSelector/FilterSelector';
import MainBanner from '@/components/MainBanner/MainBanner';
import { FilterProvider } from '@/context/FilterContext';

const Results = () => {
   return (
      <div className="bg-gray-100">
         <MainBanner />
         <FilterProvider>
            <ActiveFilter />
            <FilterSelector />
         </FilterProvider>
      </div>
   );
};

export default Results;
