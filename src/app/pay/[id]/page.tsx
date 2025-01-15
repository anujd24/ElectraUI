"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY!);

const PayPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams(); // Get id from useParams

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          { method: "POST" }
        );
        if (!res.ok) {
          throw new Error("Failed to create payment intent");
        }
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err: any) {
        console.error(err);
        setError("Something went wrong while creating the payment intent.");
      } finally {
        setLoading(false);
      }
    };

    makeRequest();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PayPage;
