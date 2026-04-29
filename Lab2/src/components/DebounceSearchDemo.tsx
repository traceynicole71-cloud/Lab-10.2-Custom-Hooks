import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const DebounceSearchDemo: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedValue = useDebounce<string>(searchTerm, 500);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full max-w-md p-6 bg-stone-800 border-2 border-green-400 rounded-2xl text-stone-100">
            <h3 className="text-center text-xl font-bold text-pink-500 mb-4 uppercase">
                DEBOUNCE SEARCH DEMO
            </h3>

            <p className="text-xs text-stone-400 mb-2 font-mono">
                Delay: 500ms
            </p>

            <input
                type="text"
                placeholder="Type to see the magic..."
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full p-3 bg-stone-900 border-2 border-stone-700 rounded-xl text-green-400 focus:outline-none focus:border-green-400 transition-all"
            />
            <div className="mt-6 space-y-3 text-sm">
                <p>
                    <span className="font-bold text-stone-400">Typing:</span>{' '}
                    <span className="text-green-400">{searchTerm || '...'}</span>
                </p>
                <p>
                    <span className="font-bold text-stone-400">Final Value:</span>{' '}
                    <span className="text-pink-500 font-bold">{debouncedValue || '...'}</span>
                </p>
            </div>
            {/*add a rocket emoji*/}
            <div className="mt-8 pt-4 border-t border-stone-700">
                <div className="text-center text-sm italic text-stone-400">
                    {debouncedValue ? (
                        <p>
                            <span className="inline-block mr-2 animate-bounce">🚀</span>
                            Searching for <span className="text-pink-500">"{debouncedValue}"</span>
                        </p>
                    ) : (
                        <p> Start Typing to Trigger the Rocket...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DebounceSearchDemo;