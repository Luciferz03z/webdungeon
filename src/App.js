import './App.css';
import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./WebGL/Build/WebGL.loader.js",
    dataUrl: "./WebGL/Build/WebGL.data",
    frameworkUrl: "./WebGL/Build/WebGL.framework.js",
    codeUrl: "./WebGL/Build/WebGL.wasm",
  });

  return (
    <Fragment>
      <Unity 
      unityProvider={unityProvider} 
      style={{
        width : window.innerWidth,
        height : window.innerHeight,
        margin : 0,
        padding : 0,
        position : 'fixed',
        top: 0,
        left: 0 }}
        />
    </Fragment>
  );
}

export default App;
