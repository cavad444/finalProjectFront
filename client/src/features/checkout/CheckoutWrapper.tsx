import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NuEYkKpOE9i2xSi1kHBSrtXjqF2UsdDXd1mRaRkyzePU7RpWsHu7K9OUflOj5QJMBgBzAt13jyrvh8vkTzXL9MN005B9S9Qyu"
);

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
