import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Card3() {
  // array list of benefits of chosen plans,with availabilty status

  const specs = [
    ["Unlimited Users", 1],
    ["150GB Storage", 1],
    ["Unlimited Public Projects", 1],
    ["Community Access", 1],
    ["Unlimited Private Projects", 1],
    ["Dedicated Phone Support", 1],
    ["Unlimited Free Subdomains", 1],
    ["Monthly Status Reports", 1]
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          Pro
        </h5>
        <h6 className="card-price text-center">
          $49<span className="period">/month</span>
        </h6>
        <hr></hr>

        {/* usage of external render component  with data sent a props */}

        <ListRender3 list={specs} />

        <a href="#" className="btn  btn-primary">
          SUBSCRIBE
        </a>
      </div>
    </div>
  );
}

// external function for rendering (conditonal using ternary operator) the list

function ListRender3(props) {
  return (
    <ul className="fa-ul">
      {props.list.map((v, i) =>
        v[1] === 1 ? (
          // key attribute value for each list item is provided

          <li key={i}>
            <span className="fa-li">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {v[0]}
          </li>
        ) : (
          <li key={i} className="text-muted">
            <span className="fa-li">
              <FontAwesomeIcon icon={faTimes} />
            </span>
            {v[0]}
          </li>
        )
      )}
    </ul>
  );
}
