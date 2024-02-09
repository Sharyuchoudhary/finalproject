"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await fetch("/api/users/verifyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        setVerified(true);
        const responsedata = await response.json();
        const { message } = responsedata;
      } else {
        setError(true);
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>Verify Email - Your Website Name</title>
        <meta
          name="description"
          content="Verify your email on Your Website Name for secure access."
        />
      </Head>
      <div style={styles.container}>
        <h1 style={styles.heading}>Verify Email</h1>
        <h2 style={styles.token}>{token ? `${token}` : "no token"}</h2>

        {verified && (
          <div style={styles.success}>
            <h2>Email Verified</h2>
            <Link href="/LOGIN" style={styles.link}>
              Login
            </Link>
          </div>
        )}
        {error && (
          <div style={styles.error}>
            <h2>Error</h2>
          </div>
        )}
      </div>
    </>
  );
}


const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "50px",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  token: {
    color: "#555",
    fontSize: "18px",
    margin: "10px 0",
  },
  success: {
    color: "#4CAF50",
    marginTop: "20px",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  error: {
    color: "#FF0000",
    marginTop: "20px",
  },
}

