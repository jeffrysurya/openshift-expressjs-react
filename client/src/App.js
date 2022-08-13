
import Sidebar from './component/Sidebar';
import ContentRight from './component/Content/ContentRight';
import ContentLeft from './component/Content/ContentLeft';

function App() {
  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar />
      <ContentLeft />
      <ContentRight />
    </div>
  );
}

export default App;
