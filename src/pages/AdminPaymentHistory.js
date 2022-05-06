import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../components/Loader/Loader";
import bottleImg from "../assets/bottle.jpg";
import initializePayment from "../helper/payment";
import { getPayments } from "../actions/paymentAction";
import PaymentBox from "../components/PaymentBox/PaymentBox";

class UserPaymentHistory extends Component {
  componentDidMount() {
    const { allPayments } = this.props;
    allPayments();
  }

  render() {
    const { payment } = this.props;
    const { loading, successResponse, error } = payment;
    const payments = successResponse?.payments;
    if (loading) return <Loader loading />;
    return (
      <section className="flex justify-between -mt-10">
        <Sidebar />
        <div className="flex flex-col items-center w-3/4 h-screen mt-10 ml-4 overflow-y-scroll">
          <div className="mb-4 text-2xl font-bold">Payment History</div>
          {payments &&
            payments.map((payment) => {
              console.log(payment);
              const { _id, user, amount, createdAt, paid, extra } = payment;
              const { name } = user;
              return (
                <PaymentBox
                  key={_id}
                  amount={amount}
                  createdAt={createdAt}
                  paid={paid}
                  exta={extra}
                  userName={name}
                />
              );
            })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  payment: state.payment,
});
const mapDispatchToProps = (dispatch) => ({
  allPayments: () => dispatch(getPayments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPaymentHistory);
