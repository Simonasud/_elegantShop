//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className=''>
      {/* Header */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;