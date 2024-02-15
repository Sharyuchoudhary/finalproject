import Header from '@/app/components/Header';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
     
    </>
  )
}