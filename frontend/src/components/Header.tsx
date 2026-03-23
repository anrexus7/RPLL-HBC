import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-700">Dashboard User</h1>
      <button className="text-gray-500 hover:text-pink-600 transition-colors">
        <Menu size={28} />
      </button>
    </header>
  );
}