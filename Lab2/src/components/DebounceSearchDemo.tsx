import REact, { useState, ChangeEvent } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const DebounceSearchDemo: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debounceValue = useDebounce<string>(searchTerm, 500);

    return (
        <div style={{ background: '#2d2d2d', color: '#f0f0f0', padding: '20px', borderRadius: '15px', border: '2px solid #50fa7b', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
            <h3 style={{ textAlign: 'center', color: '#ff79c6' }}>DEBOUNCE SEARCH DEMO</h3>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Debounce Delay (ms): 500</p>

            <input 
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            style={{
                width: '100%',
                padding: '12px',
                background: '#1a1a1a',
                color: '#50fa7b',
                border: '2px solid #444',
                borderRadius: '8px',
                outline: 'none'
            }}
            />
            
        </div>
    )
}