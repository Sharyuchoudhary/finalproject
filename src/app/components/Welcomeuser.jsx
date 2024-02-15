import React from "react";
import { Helmet } from "react-helmet";

export default function Welcomeuser(props) {
  return (
    <div>
      <Helmet>
        <title>Welcome {props.username} - Skillsail</title>
        <meta name="description" content={`Welcome ${props.username}! Explore our range of online courses at Skillsail.`} />
      </Helmet>

      <h1>WELCOME  , {props.username} !</h1>
      <p>Checkout Our Courses</p>
    </div>
  );
}
