import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <Link
        to={`/uncontrolled`}
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
      >
        Uncontrolled Component
      </Link>
      <Link
        to={`/controlled`}
        className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
      >
        Controlled Component
      </Link>
      <Link
        to={`/test`}
        className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
      >
        Test
      </Link>
    </div>
  );
}

export default App;
