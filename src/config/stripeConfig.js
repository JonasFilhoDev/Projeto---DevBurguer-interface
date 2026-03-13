import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51T5Pwl9eepyah41GaT5dtXS9lcijBScki5suLaNB39f8zCOzGY2OdBtSLse8C3kd6Xb7BpBV3ufrhZACwDprkxAX00u0Q9mbYX'
);

export default stripePromise;