import { ProtectedRoute } from '@shared/lib/auth';

const HomePage = () => {
  return (
    <ProtectedRoute>
      <main className="p-2">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </main>
    </ProtectedRoute>
  );
};

export default HomePage;
