import React from "react";
import Confetti from "react-confetti";

export function ConfettiLauncher(props) {
  const [isLaunched, setIsLaunched] = React.useState(false);

  return (
    <>
      {isLaunched && (
        <Confetti
          width={2000}
          height={1000}
          numberOfPieces={props.confettiVolume || 100}
        />
      )}
      <div
        style={{
          margin: "120px auto",
          width: 400,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          style={{
            padding: "12px 24px",
            borderRadius: "5px",
            color: "#fff",
            background: "#dc4419",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "24px",
            border: "none",
          }}
          onClick={() => setIsLaunched((launched) => !launched)}
        >
          {props?.buttonText || "Click Me"}
        </button>
      </div>
    </>
  );
}
