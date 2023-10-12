function Notification({ successMessage, errorMessage, active }) {
  return (
    <>
      {active &&
        (successMessage ? (
          <div className="bg-green-500 p-1">{successMessage}</div>
        ) : (
          <div className="bg-red-500 p-1">{errorMessage}</div>
        ))}
    </>
  );
}

export default Notification;
