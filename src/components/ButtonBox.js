import { Children } from "react";
import "./ButtonBox.css";

const ButtonBox = ({ children }) => {
    return (
        <div className="button-box">{ children }</div>
    );
}
 
export default ButtonBox;