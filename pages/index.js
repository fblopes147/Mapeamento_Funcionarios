import useSWR from 'swr'
import Link from 'next/link'
import styles from '../styles.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  return (
    <div>
      <li className={styles.mapeamento}>
        <Link href="MapeamentoFuncionarios/principal">
          <a>MAPEAMENTO DE FUNCIONÁRIOS</a>
        </Link>
      </li>
    </div>
  )
}
