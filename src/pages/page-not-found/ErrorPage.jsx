import img from "./page-not-found.svg";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center">
          <img className="w-3/5 h-[300px]" src={img} alt="404 image" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-playpen text-center">
          Page not found
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
