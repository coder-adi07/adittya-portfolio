import { Link } from "react-router-dom";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowLeft, Home } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20">
      <Container className="text-center max-w-lg mx-auto space-y-6">
        <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
          ERROR 404
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The requested route doesn't exist or has moved. Return to the main portfolio to explore projects and services.
        </p>
        <div className="pt-2 flex justify-center">
          <Link to="/">
            <Button variant="primary" size="md">
              <Home size={15} />
              <span>Back to Portfolio</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
