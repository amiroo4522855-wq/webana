import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from '../components/layout/SiteLayout';
import { ThemeProvider } from '../core/theme/ThemeProvider';
import { HomePage } from '../features/home/HomePage';
import { NotFoundPage } from '../features/not-found/NotFoundPage';
import { StartPage } from '../features/start/StartPage';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/start" element={<StartPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
