 import s from "@/app/styles/s.module.css"
import Header from "../components/Header"

export default function RootLayout({ children }) {
    return (
       <html lang="en">
        
         <body className={s.body}><Header />{children}</body>
       </html>
     )
   }
   