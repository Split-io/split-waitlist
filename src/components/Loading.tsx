import Logo from "../assets/icons/logo.svg";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[#4A2FD3] z-50">
      <div className="fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Loading;
