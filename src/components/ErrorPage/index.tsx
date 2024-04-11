import { useRouteError } from "react-router-dom";
import { IErrorPageResponse } from "./inteface";

const ErrorPage = () => {
  const error = useRouteError() as IErrorPageResponse;

  return (
    <div className="flex flex-col items-center justify-center pt-[200px]">
      <h1 className="text-[70px] leading-6 font-semibold pb-7">Oops!</h1>
      <p className="text-[30px] leading-5 text-black pb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-[25px] text-blue-700">
        <i>{(error.statusText as string) || (error.error.message as string)}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
