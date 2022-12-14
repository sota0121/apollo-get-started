import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuery, gql } from '@apollo/client';

// Query
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// Components
function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <p>
        {description}
      </p>
      <img width="400" height="250" src={photo} alt={name} />
    </div>
  ));
};

function App() {
  // Hooks
  const [count, setCount] = useState(0)

  // Render
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <DisplayLocations />
    </div>
  )
}

export default App
