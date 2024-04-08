import { ThreeDots } from 'react-loader-spinner';
import './loading-screen.css';

function LoadingScreen(): JSX.Element {

  return (
    <div className='load-spinner' data-testid="load-spinner">
      <ThreeDots
        height="80"
        width="80"
        color="#4481c3"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default LoadingScreen;
