import styles from './MovieDetails.module.scss';
import Image from 'next/image';
import Link from "next/link";
import { FaImdb } from 'react-icons/fa';
import { IoIosArrowDropleftCircle} from 'react-icons/io';

export default function MovieDetails({data}) {
  return (
    <div className={styles.details}>
      <Image
        src={data.Poster}
        alt={`${data.Title} Poster`}
        width={300}
        height={445}
      />
      <div className={styles.details__text}>
        <h1 className={styles.details__title}>{data.Title}</h1>
        <p className={styles.details__plot}>{data.Plot}</p>
        <div className={styles.container} >
          <div className={styles.details__rating}>
            <FaImdb size={50}/>
            <span>{data.imdbRating}</span>
          </div>
          <div className={styles.back}>
          <Link href="/">
            <IoIosArrowDropleftCircle size={50}/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}