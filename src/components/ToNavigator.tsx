import { Link } from 'react-router-dom';

export default function ToNavigator() {
  return (
    <Link
      className='flex align-center content-center justify-center p-10 bg-lime-600'
      to='navigator?tab=0'
    >
      To navigator URL
    </Link>
  );
}
