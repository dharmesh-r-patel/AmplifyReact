import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./navigation/Page";

const App = ({ routes }) => (
  // We use <BrowserRouter> in order to support
  // routing example hosted on GitHub pages.
  // <BrowserRouter> could be safely replaced with <Router> in
  // your production application.
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path}>
          <Page route={route} />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React With Auth
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// const App = () => (
//   <div>
//     <AmplifySignOut />
//     My App
//   </div>
// );

// export default withAuthenticator(App);
// import React from "react";
// // import logo from "./logo.svg";
// // import "./App.css";
// import Amplify from "aws-amplify";
// import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// // import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
// import aws_exports from "./aws-exports";
// import { withAuthenticator } from "aws-amplify-react";

// Amplify.configure(aws_exports);

// function App() {
//   // const [authState, setAuthState] = React.useState();
//   // const [user, setUser] = React.useState();

//   // React.useEffect(() => {
//   //   onAuthUIStateChange((nextAuthState, authData) => {
//   //     setAuthState(nextAuthState);
//   //     setUser(authData);
//   //   });
//   // }, []);

//   // return authState === AuthState.SignedIn && user ? (
//   //   <div className="App">
//   //     <div>Hello, {user.username}</div>
//   //     <AmplifySignOut />
//   //   </div>
//   // ) : (
//   //   <AmplifyAuthenticator />
//   // );

//   return (
//     <AmplifyAuthenticator>
//       <div>
//         My App
//         <AmplifySignOut />
//       </div>
//     </AmplifyAuthenticator>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React With Auth
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default withAuthenticator(App, true);
