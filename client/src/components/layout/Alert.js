import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import Swal from "sweetalert2";

// // CommonJS
// const Swal = require("sweetalert2");

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
