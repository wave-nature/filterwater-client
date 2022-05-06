import bottleImage from "../assets/bottle.jpg";
import { API_URL } from "../api/API_URL";
import axios from "axios";
import { toast } from "react-toastify";
const initializePayment = (
  amount,
  orderId,
  name,
  email,
  mobile,
  user,
  extra,
  payHandler
) => {
  const options = {
    key: "rzp_test_x1RflGWea9O3QX", // Enter the Key ID generated from the Dashboard
    amount: amount || 10000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "filterwater",
    description: "Test Transaction",
    image: bottleImage,
    order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: async function (response) {
      //   alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature);

      const res = await axios.post(`${API_URL}api/payments/verify`, {
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
      });

      const signatureIsValid = res.data?.response?.signatureIsValid;
      //   alert(signatureIsValid);
      console.log(signatureIsValid);
      if (signatureIsValid) {
        await axios.post(`${API_URL}api/payments`, {
          user,
          amount: amount,
          paid: true,
          extra,
        });
        payHandler();
        toast.success("Payment Successfully Captured!");
      } else {
        toast.error("Payment failed!!!");
      }
    },
    prefill: {
      name: name,
      email: email,
      contact: mobile,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#2590EB",
    },
  };

  return options;
};

export default initializePayment;
