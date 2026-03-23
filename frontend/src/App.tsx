import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route menggunakan Layout */}
        <Route path="/" element={<DashboardLayout />}>
          {/* Child Route: Tampil di dalam <Outlet /> pada Layout */}
          <Route index element={<Dashboard />} />
          
          {/* Dummy routes untuk menguji menu Sidebar */}
          <Route path="file" element={<div>Halaman File Kosong</div>} />
          <Route path="messages" element={<div>Halaman Messages Kosong</div>} />
          <Route path="notification" element={<div>Halaman Notifikasi Kosong</div>} />
          <Route path="location" element={<div>Halaman Lokasi Kosong</div>} />
          <Route path="graph" element={<div>Halaman Grafik Kosong</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}