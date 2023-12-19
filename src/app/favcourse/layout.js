 import s from "@/app/styles/s.module.css"

export default function RootLayout({ children }) {
    return (
       <html lang="en">
         <body className={s.body}>{children}</body>
       </html>
     )
   }
   