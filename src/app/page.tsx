import Autocomplete from "@/components/ui/Autocomplete";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <main>
        <Button>
          Search
        </Button>
        <Autocomplete />
      </main>
      <footer>
      </footer>
    </div>
  );
}
