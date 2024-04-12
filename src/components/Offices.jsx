import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Jaipur" invert={invert}>
          18-19, A, Pawan General Store,
          <br />
          Near Government Middle School
        </Office>
      </li>
      <li>
        <Office name="Rajasthan" invert={invert}>
        Kartarpur Road, Jaipur, Rajasthan, India, 
          <br />
          302006
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
