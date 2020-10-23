import Link from 'next/link'
import styles from '../styles.module.css'

export default function Index() {
  return (
    <div>
      <li className={styles.mapeamento}>
        <Link href="MapeamentoFuncionarios/principal">
          <a>MAPEAMENTO DE ASSOCIADOS</a>
        </Link>
      </li>
    </div>
  )
}