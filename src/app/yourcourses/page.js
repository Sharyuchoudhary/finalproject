

'use client'

import { useEffect, useState } from 'react';
import s from "@/app/styles/s.module.css"
import Image from 'next/image';
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';
import sha256 from "crypto-js/sha256";

import { useRouter } from "next/navigation";

const FavCartPage = ({ name }) => {

  const router = useRouter();
  const [favCourses, setFavCourses] = useState([]);
const [bill , setbill] = useState(0)
  async function fetchData() {
    try {
      const response = await fetch('/api/users/atcart', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
console.log(data);
const {favoriteCourses} = data 


   
      setbill(data.total)
        setFavCourses(favoriteCourses); // Update state with favoriteCourses
      
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();

  }, []);

  async function deleteFavCourse(id) {
    try {
      const response = await fetch('/api/users/atcart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
      
  
      if (response.ok) {
        console.log('Favorite course deleted successfully.');
        fetchData();
      } else {
        console.error('Failed to delete favorite course.');
      }
    } catch (error) {
      console.error('Error deleting favorite course:', error);
    }
  }
  

  const makepayment = async () => {

const transactionid = "Tr-"+uuidv4().toString(36).slice(-6)

const payload = {
  merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
  merchantTransactionId: transactionid,
  merchantUserId: 'MUID-'+uuidv4().toString(36).slice(-6),
  amount:bill,
  redirectUrl: `http://localhost:3000/api/status/${transactionid}`,
  redirectMode: "POST",
  callbackUrl: `http://localhost:3000/api/status/${transactionid}`,
  mobileNumber: '9999999999',
  paymentInstrument: {
    type: "PAY_PAGE",
  },
};



const dataPayload = JSON.stringify(payload);

const dataBase64 = Buffer.from(dataPayload).toString("base64");

const fullURL =
dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
const dataSha256 = sha256(fullURL);

const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;



try {

  const UAT_PAY_API_URL =
  "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

  const response = await fetch(UAT_PAY_API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
    },
    body: JSON.stringify({ request: dataBase64 }),
  });



  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData = await response.json();
let redirect = responseData.data.instrumentResponse.redirectInfo.url

router.push(redirect)


} catch (error) {
  console.error('There was a problem with the fetch operation:', error);
}



  }


  return (

    
    <div className={s.maindivv} >
   
     <div className={s.hh}> <h1> CART </h1> <hr/>
     
    <Link href="/courses"><Image className={s.ii} src={"/hh.png"} width={30} height={30} alt='delet text' />
     </Link> 
     </div>


     <div className={s.cdivv}>     {favCourses.map((course) =>{

return <div className={s.ccdiv1}  key={course._id}>
  
  <div className={s.ccdiv} key={course._id}>



<div className={s.ccn}>  <h4>{course.courseName}</h4></div>
<div className={s.ccn}>  <h4>{course. instructor}</h4></div>
<div className={s.ccn}>  <h4>{course.price}</h4></div>
<div className={s.del}> 
<Image src={'/t.png'} width={20} height={20} alt="Delete Icon" onClick={() => deleteFavCourse(course._id)} />
</div>

</div> </div> 

 })}

 </div>
   
   
<div className={s.cnn}> 

<h4> BILL : Rs. {bill} </h4>
<button className={s.butt} onClick={makepayment}>CHECKOUT </button>

</div> 


</div>


    
  );
 
};

export default FavCartPage;
