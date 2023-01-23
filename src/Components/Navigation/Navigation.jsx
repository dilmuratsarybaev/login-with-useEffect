import styled from "styled-components";

const StyledButtons = styled.button`
  background-color: #b009b9;
  padding: 0.5rem 1.5rem;
  margin-right: 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  border-radius: 1rem;
  border: none;
`;
export const Navigation = ({ loginHandler,  setDataList }) => {
  const submitLogout = (event) => {
    event.preventDefault();
    loginHandler(true);
  };

  const submitTimerStart = (event) => {
    event.preventDefault();
    setDataList(false)
  };
  const submitUserDatalist = (event) => {
    event.preventDefault();
    setDataList(true);
  };
  return (
    <>
      <div>
        <StyledButtons children={"Users"} onClick={submitUserDatalist} />
        <StyledButtons children={"Timer"} onClick={submitTimerStart} />
        <StyledButtons children={"Logout"} onClick={submitLogout} />
      </div>
    </>
  );
};
