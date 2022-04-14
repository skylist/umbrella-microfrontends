import styles from '../../styles/Home.module.css'

export default function Message({ message }) {
    if (message) {
        return (
            <p className={styles.description}>
                wow! another page send a message!!
                <code className={styles.code}>{message}</code>
            </p>
        )
    } else {
        return <></>
    }
}