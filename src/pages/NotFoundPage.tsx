import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-forest-700 text-6xl font-bold mb-6 font-playfair">404</h1>
        <h2 className="text-2xl font-semibold text-forest-800 mb-4 font-playfair">Page Not Found</h2>
        <p className="text-stone-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/" className="bg-forest-600 hover:bg-forest-700 text-white">
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
