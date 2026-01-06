import "../../styles/global.css";
import arrowIcon from "../../assets/icons/arrow.svg";

export default function ScrollIndicator() {
    return (
      <div className="scroll-indicator">
        <span>
        <img src={arrowIcon} alt="Scroll down" />
        </span>
      </div>
    );
  }
  