import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import { Home, Catalogue, Favorite } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};

export default App;
