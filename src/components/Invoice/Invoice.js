import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Total from "./Total";
import initializePayment from "../../helper/payment";
import { createOrderAction } from "../../actions/paymentAction";

const Invoice = ({
  date,
  days,
  deliveries,
  connectionFor,
  role,
  showModal,
}) => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const totalDeliveredDays = deliveries.filter(
    (delivery) => delivery.delivered
  );
  const totalBalance = totalDeliveredDays.length * connectionFor;

  useEffect(() => {
    dispatch(createOrderAction(totalBalance));
  }, [totalBalance, dispatch]);

  const paymentHandler = () => {
    const { error, successResponse } = payment;
    const orderId =
      successResponse && successResponse.data && successResponse.data.orderId;
    const amount =
      successResponse && successResponse.data && successResponse.data.amount;
    const name =
      successResponse && successResponse.data && successResponse.data.name;
    const email =
      successResponse && successResponse.data && successResponse.data.email;
    const mobile =
      successResponse && successResponse.data && successResponse.data.mobile;
    const user =
      successResponse && successResponse.data && successResponse.data.user;

    if (error) console.log(error);

    // console.log(orderId, amount, name, email, mobile);
    const options = initializePayment(
      amount,
      orderId,
      name,
      email,
      mobile,
      user,
      false
    );
    var rzp1 = new window.Razorpay(options);
    rzp1.open();

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    //   e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col w-full px-10 py-4 mt-10 bg-slate-100">
        <Total
          title={`Total days out of ${days.at(-1)}`}
          total={`${totalDeliveredDays.length} days`}
        />
        <Total
          title={`Total amount of water delivered`}
          total={`${totalDeliveredDays.length}x${connectionFor}=${totalBalance}L`}
        />
        <Total
          title={`Total payable amount till ${date.toLocaleDateString("en-us", {
            month: "long",
          })} ${days.at(-1)}`}
          total={`${totalDeliveredDays.length}x${connectionFor}= Rs ${totalBalance}`}
        />
        {role === "user" && (
          <button
            onClick={paymentHandler}
            className={`self-end btn-primary
              ${
                // date.getDate() !== days.at(-1)
                false ? "bg-gray-400 cursor-not-allowed border-none" : ""
              }`}
            // disabled={date.getDate() !== days.at(-1)}
          >
            Pay on {date.toLocaleDateString("en", { month: "long" })}{" "}
            {/* {days.at(-1)} */}
            {new Date().getDate()}
          </button>
        )}
      </div>
      {role === "user" && (
        <div className="flex justify-between w-full px-10 mx-10 mt-4">
          <div className="text-xl">
            Any problem with monthly status please feel free to contact us
          </div>
          <button onClick={showModal} className="btn-secondary">
            Raise Issue
          </button>
        </div>
      )}
    </>
  );
};

export default Invoice;
