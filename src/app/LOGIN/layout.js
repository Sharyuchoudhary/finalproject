import styles from "@/app/LOGIN/page.module.css";

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={styles.body2}>{children}</body>
    </html>
  )
}
2