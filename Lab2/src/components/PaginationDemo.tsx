import React from 'react';
import { usePagination } from '../hooks/usePagination';

const PaginationDemo: React.FC = () => {
    const data: string[] = Array.from({ length: 123 }, (_, i) => `Item ${i + 1}`);

    //initialize Pagination hook wtih data length
    const {
        currentPage, totalPages, startIndex, endIndex, nextPage, prevPage, canNextPage, canPrevPage, setPage
    } = usePagination({ totalItems: data.length, itemsPerPage: 10 });

    const currentItems = data.slice(startIndex, endIndex + 1);
//matching styles
    return (
        <div className="w-full max-w-md p-6 bg-stone-800 border-2 border-pink-800 rounded-2xl shadow-2xl text-stone-100">
            <h3 className="text-center text-xl font-bold text-green-400 mb-4 uppercase tracking-wider">
                PAGINATION DEMO
            </h3>

<div className="flex justify-between text-xs text-stone-400 mb-4 font-mono">
    <span>Items: {data.length}</span>
    <span>Page: {currentPage} / {totalPages}</span>
</div>

{/*list of items*/}
<ul className="space-y-2 mb-6">
    {currentItems.map((item, idx) => (
        <li key={item} className="bg-stone-900/50 px-3 py-1 rounded border-l-2 border-green-400 text-sm">
            <span className="text-green-400 font-bold mr-2">{startIndex + idx + 1}.</span>
            {item}
        </li>
    ))}
</ul>

{/*navigation buttons*/}
<div className="flex justify-between items-center mb-6">
    <button
    onClick={prevPage}
    disabled={!canPrevPage}
    className="px-4 py-2 bg-pink-500 text-stone-900 font-bold rounded-lg disabled:cursor-not-allowed hover:bg-pink-400 transition-all shadow-lg active:scale-95"
    >
       Prev
    </button>

    <span className="text-sm font-semibold">Page {currentPage}</span>

    <button
    onClick={nextPage}
    disabled={!canNextPage}
    className="px-4 py-2 bg-pink-500 text-stone-900 font-bold rounded-lg disabled:cursor-not-allowed hover:bg-pink-400 transition-all shadow-lg active:scale-95"
    >
        Next
    </button>
</div>

<div className="flex flex-wrap gap-2 justify-center border-t border-stone-700 pt-4">
    {Array.from({ length: totalPages }, (_, i) => (
      <button
      key={i}
      onClick={() => setPage(i + 1)}
      className={`w-8 roumded-md text-xs font-bold transition-all ${
        currentPage === i + 1
        ? 'bg-green-400 text-stone-900 scale-110 shadow-[0_0_10px_rgba(74, 222, 128, 0.5)]'
        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
      }`}  
      >
        {1 + 1}
      </button>
    ))}
</div>
        </div>
    );
    };

    export default PaginationDemo;