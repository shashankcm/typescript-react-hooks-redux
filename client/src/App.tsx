import React, { useState, ChangeEvent } from "react";
import "./App.css";

interface IAppOwnProps {
  username: string | undefined;
  userType: "adim" | "moderator" | "user" | "guest";
}

const App: React.FC<IAppOwnProps> = ({ username, userType }): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [message, setMessage] = useState<string>("");

  setInterval(() => {
    setTime(new Date(Date.now()));
  }, 1000);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };
  return (
    <div className="App">
      <p>
        Hi, {username ? username : "Mysterious Entity"}, your user type is{" "}
        {username ? userType : "irrelevant because I do not know you"}.
      </p>
      <p>{time.toUTCString()}</p>
      <input
        type="text"
        placeholder="Enter your message here"
        value={message}
        onChange={handleTextChange}
      />
      <p>Your message: {message || ""}</p>
    </div>
  );
};

export default App;
