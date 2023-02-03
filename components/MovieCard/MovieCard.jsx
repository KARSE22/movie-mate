import Link from 'next/link';
import Image from "next/image";
import styles from "./MovieCard.module.scss";
const aboveTheFoldIds = ['tt0371746', 'tt1228705', 'tt2250912', 'tt2015381', 'tt0478970', 'tt0478970', 'tt0800080', 'tt1228705'];

export default function MovieCard({ movie }) {

  return (
    <div>
      <Link href="/movie/[id]" as={`movie/${movie.imdbID}`} className="link">
        <div className={styles.frame}>
          <div className={styles.card__image_container}>
            <figure>
              <Image src={movie.Poster} alt={movie.Title} width={300} height={445} className={styles.thumbnail}
              priority={ aboveTheFoldIds.includes(movie.imdbID) ? true : false} />
            </figure>
          </div>
          <div className={styles.card_caption}>
            <div className={styles.card_title}>
              <p>{movie.Title}</p>
            </div>
            <div className="card__year">
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}