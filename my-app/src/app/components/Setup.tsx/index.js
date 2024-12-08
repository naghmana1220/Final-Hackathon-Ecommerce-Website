import Setup from '../../components/Setup.tsx/page'

export default function Home() {
  return (
    <div>
      <header className="text-center py-10 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-2xl font-semibold text-blue-400 mt-2">
          #FuniroFurniture
        </p>
      </header>
      <Setup />
    </div>
  );
}