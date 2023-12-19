import Header from "../components/Header"
import Footer from "../components/Footer"
import s from "@/app/styles/s.module.css"

  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body className={s.l}>
            <Header/>
            {children}
            <Footer/>
            
            </body>
      </html>
    )
  }
  