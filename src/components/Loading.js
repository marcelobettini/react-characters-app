import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "red",
};

const Loading = () => (
  <div className="d-flex flex-end" style={{ height: "100vh" }}>
    <PuffLoader color="black" css={override} size={125} />
  </div>
);

export default Loading;
