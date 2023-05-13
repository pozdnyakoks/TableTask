import info from '../info';

export default function Table(tab: string) {
  let type = '';
  switch (tab) {
    case '1':
      type = 'outcome';
      break;
    case '2':
      type = 'loan';
      break;
    case '3':
      type = 'investment';
      break;
    default:
      type = 'income';
      break;
  }

  const tableRows = info.data
    .filter((info) => info.type === type)
    .map((filtered) => {
      const name = `${filtered['name']['first']} ${filtered['name']['last']}`;
      const randomAmount = Math.round(Math.random() * 4000);
      return (
        <tr className='border-b-2  h-10' key={filtered._id}>
          <td>{name}</td>
          <td>{randomAmount}</td>
        </tr>
      );
    });

  return (
    <table className='mx-auto w-96 text-center p-4'>
      <thead>
        <tr className='border-b-2 h-3'>
          <th>Name</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
