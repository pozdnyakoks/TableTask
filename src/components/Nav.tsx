import { useSearchParams } from 'react-router-dom';
import Table from './table';

export default function Nav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFilter = searchParams.get('tab') || '0';

  function handleFilterChange(key: string, value: string) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const tableElement = Table(tabFilter);

  return (
    <>
      <nav className='flex gap-8 justify-center my-8'>
        <button
          className={tabFilter === '0' ? 'bg-orange-600 p-1 ' : ''}
          onClick={() => handleFilterChange('tab', '0')}
        >
          Income
        </button>
        <button
          className={tabFilter === '1' ? 'bg-orange-600 p-1 ' : ''}
          onClick={() => handleFilterChange('tab', '1')}
        >
          Outcome
        </button>
        <button
          className={tabFilter === '2' ? 'bg-orange-600 p-1 ' : ''}
          onClick={() => handleFilterChange('tab', '2')}
        >
          Loans
        </button>
        <button
          className={tabFilter === '3' ? 'bg-orange-600 p-1 ' : ''}
          onClick={() => handleFilterChange('tab', '3')}
        >
          Investments
        </button>
      </nav>
      {tableElement}
    </>
  );
}
