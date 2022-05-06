import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../components/Loader/Loader";
import bottleImg from "../assets/bottle.jpg";
import initializePayment from "../helper/payment";
import { createOrderAction, getMyPayments } from "../actions/paymentAction";
import PaymentBox from "../components/PaymentBox/PaymentBox";

class UserPaymentHistory extends Component {
  state = {
    showModal: false,
    bottle: 10,
    paid: false,
  };
  componentDidMount() {
    const { myPayments } = this.props;
    myPayments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { createOrder } = this.props;
    if (this.state.showModal !== prevState.showModal && this.state.showModal) {
      createOrder(this.state.bottle);
    }
    if (this.state.bottle !== prevState.bottle) {
      createOrder(this.state.bottle);
    }
    if (this.state.paid !== prevState.paid) {
      const myPayments = this.props.myPayments;
      myPayments();
      this.setState({ paid: false });
    }
  }

  showExtraPaymentModal() {
    this.setState({ showModal: true });
  }
  hideModal() {
    this.setState({ showModal: false });
  }

  selectHandler(e) {
    const bottle = +e.target.value;
    this.setState({ bottle });
  }

  payHandler() {
    this.setState({ paid: true });
  }
  paymentHandler() {
    const { payment } = this.props;
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
      true,
      this.payHandler.bind(this)
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

    this.hideModal();
    //   e.preventDefault();
  }

  render() {
    const { payment } = this.props;
    const { loading, successResponse, error } = payment;
    const payments = successResponse?.payments;
    if (loading) return <Loader loading />;
    return (
      <section className="flex justify-between -mt-10">
        {this.state.showModal ? (
          <div className="flex flex-col justify-around w-1/3 p-8 mx-auto shadow-lg mt-52 h-52 bg-slate-100">
            <div className="flex justify-around">
              <label htmlFor="order" className="text-lg font-bold ">
                Choose Bottle Type:{" "}
              </label>
              <select
                onChange={this.selectHandler.bind(this)}
                id="order"
                className="px-4 py-2 cursor-pointer "
              >
                <option value={10} className="px-4 py-2">
                  10
                </option>
                <option value={20} className="px-4 py-2">
                  20
                </option>
              </select>
            </div>
            <div className="flex justify-around ">
              <button
                onClick={this.hideModal.bind(this)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={this.paymentHandler.bind(this)}
                className="btn-primary"
              >
                Pay ₹{this.state.bottle}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Sidebar />
            <div className="flex flex-col items-center w-3/4 h-screen mt-10 ml-4 overflow-y-scroll">
              <div className="mb-4 text-2xl font-bold">Payment History</div>
              <button
                onClick={this.showExtraPaymentModal.bind(this)}
                className="btn-secondary"
              >
                Buy Extra Bottle
              </button>

              {payments &&
                payments.map((payment) => {
                  // console.log(payment);
                  const { _id, amount, createdAt, paid, extra } = payment;
                  return (
                    <PaymentBox
                      key={_id}
                      amount={amount}
                      createdAt={createdAt}
                      paid={paid}
                      exta={extra}
                    />
                  );
                })}
            </div>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  payment: state.payment,
});
const mapDispatchToProps = (dispatch) => ({
  createOrder: (amount) => dispatch(createOrderAction(amount)),
  myPayments: () => dispatch(getMyPayments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPaymentHistory);
