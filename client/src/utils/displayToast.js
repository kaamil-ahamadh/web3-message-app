import { css } from "glamor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export function displayToast(text, failed) {
  toast(`${!failed ? "✅" : "❌"} ${text}`, {
    className: css({
      background: "#11ECE5 !important",
      color: "black !important",
      fontWeight: "bold",
      borderRadius: "5px",
    }),
  });
}
