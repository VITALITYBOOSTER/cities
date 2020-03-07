import React from "react";

const DialogItem = props => {
  const handleConfirm = e => {
    if (e.target.name === "yes") {
      props.setConfirming(true);
      props.setShowDialog(false);
    }
    if (e.target.name === "no") {
      props.setConfirming(false);
      props.setShowDialog(false);
    }
    if (e.target.name == "cancel") props.setShowDialog(false);
  };

  return (
    <div
      onClick={handleConfirm}
      className="modal-content modal-dialog modal-sm"
    >
      <div className="modal-header">
        <button name="cancel" className="close">
          X
        </button>
      </div>
      <div className="modal-title">
        Are you sure you want to delete {props.cityName} city?
      </div>
      <div onClick={handleConfirm} className="modal-footer">
        <button name="yes" className="btn-success btn-sm">
          Yes
        </button>
        <button name="no" className="btn-danger btn-sm">
          No
        </button>
      </div>
    </div>
  );
};

export default DialogItem;
