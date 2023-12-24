import logo from "./assets/react.svg";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const PrintComponent = ({ children }) => {
  const componentRef = useRef(null);
  const printAction = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <button
        className={"print-preview-button"}
        onClick={printAction}
      >
        Print Preview
      </button>
      <table ref={componentRef} className="print-component">
        <thead>
          <tr>
            <th>
              <img
                src={logo}
                height={"40px"}
                width={"40px"}
                alt="logo"
              />
              <div>{"Page Header"}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{children}</td>
          </tr>
        </tbody>
        <tfoot className="table-footer">
          <tr>
            <td>{"Page footer"}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default PrintComponent;
