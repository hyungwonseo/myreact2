import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1344px;
  height: 756px;
  margin: auto;
  border: 1px solid gray;
`;

export function TopDownAction() {
  const [playingGame, setPlayingGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/Build.loader.js",
      dataUrl: "build/Build.data",
      frameworkUrl: "build/Build.framework.js",
      codeUrl: "build/Build.wasm",
    });

  function handleGameOver(userName, score) {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, []);

  return (
    <>
      <h1>Top Down Action Game</h1>
      <button onClick={() => setPlayingGame(true)}>Start Game</button>
      <button onClick={() => sendMessage("Player", "Attack")}>Attack</button>
      <Container>
        {playingGame ? (
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : null}
      </Container>
      {isGameOver && (
        <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
      )}
    </>
  );
}
