import "./App.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
    Route,
    Routes
} from "react-router-dom";

import DisplayData from "./components/DisplayData";
import { Header } from "./components/Header";
import TrackDetails from "./components/TrackDetails";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<DisplayData />} />
            <Route path=":trackID" element={<TrackDetails />} />
        </Routes>
        {/* <DisplayData /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;

