import { useRouter } from "next/router";
import MovieCard from "../../components/MovieCard";

const movies = [
  {
    id: "1",
    title: "Початок",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    description: "Команда викрадає ідеї через сни.",
    genre: "Трилер",
    date: "2025-05-22 18:00",
  },
  {
    id: "2",
    title: "Матриця",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description: "Герой прокидається в комп'ютерній симуляції.",
    genre: "Фантастика",
    date: "2025-05-23 20:00",
  },
  {
    id: "3",
    title: "Інтерстеллар",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    description: "Космічна подорож задля порятунку людства.",
    genre: "Наукова фантастика",
    date: "2025-05-24 19:00",
  },
];

export default function BookingPage() {
  const router = useRouter();
  const { id } = router.query;

  const movie = movies.find((m) => m.id === id);

  const handleBooking = () => {
    alert(`Бронювання фільму: ${movie.title}`);
    // Або перехід: router.push('/success');
  };

  if (!movie) return <div className="p-4">Фільм не знайдено</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Бронювання: {movie.title}</h1>
      <MovieCard movie={movie} onBook={handleBooking} />
    </div>
  );
}
