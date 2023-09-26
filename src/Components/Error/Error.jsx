import { useRouteError, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const Error = ({ path }) => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="w-full h-screen text-center flex flex-col justify-center items-center">
      {error && <Navigate to={path} replace={true} />}
      <h1 className="text-3xl">oops</h1>
      <p className="text-xl">You can fix it with a refresh</p>
      <p className="text-xl">
        for more information search on google you can fined some permanent
        solutions
      </p>
    </div>
  );
};
Error.propTypes = {
  path: PropTypes.string,
};
export default Error;
