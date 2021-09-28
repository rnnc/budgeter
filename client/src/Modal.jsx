//import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = styled.div`
  padding: 5px;
  border: 1px black solid;
  border-radius: 10px;
  box-shadow:
  3.1px 4.3px 4.2px -10px rgba(0, 0, 0, 0.022),
  7.2px 9.9px 10.1px -10px rgba(0, 0, 0, 0.032),
  13px 18px 19px -10px rgba(0, 0, 0, 0.04),
  22.6px 31.1px 34px -10px rgba(0, 0, 0, 0.048),
  41.5px 57.2px 63.5px -10px rgba(0, 0, 0, 0.058),
  100px 138px 152px -10px rgba(0, 0, 0, 0.08);
`;

export default Modal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
}
