import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ClipLoader size={50} color="#dc2626" />
    </div>
  );
};

export default Loading;