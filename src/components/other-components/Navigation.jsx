import { NavLink } from "react-router-dom";
import "../../styles/Navigation.css";

export default function Navigation({ children }) {
  let n = children.length;
  return (
    <>
      <div id="navigation-container">
        <ul>
          {children.map((item, index) => {
            if (index !== n - 1) {
              return (
                <>
                  <li key={index}>
                    <NavLink to={item === "home" ? "/" : `/${item}`}>{item}</NavLink>
                  </li>
                  <li key={`${index}-symbol`}>{"➤"}</li>
                </>
              );
            } else {
              return <li key={index}>{item}</li>;
            }
          })}
        </ul>
      </div>
    </>
  );
}
