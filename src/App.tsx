import axios from 'axios';
import { useEffect, useRef } from 'react';

interface ICounreyInfo {
  name: string;
  nativeName: string;
  area: number;
  flags: Record<'png' | 'svg', string>;
}

const App = () => {
  const ranRef = useRef(false);
  useEffect(() => {
    if (!ranRef.current) {
      (async () => {
        const { data } = await axios.get<ICounreyInfo[]>(
          `https://restcountries.com/v2/name/egypt`
        );
        console.log('png: ', data[0].flags.png);
        console.log('svg: ', data[0].flags.svg);
        console.log('svg: ', data[0]);
      })();
    }
    return () => {
      ranRef.current = true;
    };
  }, []);
  return <div>App</div>;
};

export default App;

// import Gifs from "./pages/Gifs";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import UserContext from "./context/UserContext";
// import WithAuth from "./components/WithAuth";

// function App() {
//   return (
//     <BrowserRouter>
//       <UserContext>
//         <Nav />
//         <Routes>
//           <Route
//             path="/gifs"
//             element={
//               <WithAuth>
//                 <Gifs />
//               </WithAuth>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </UserContext>
//     </BrowserRouter>
//   );
// }

// export default App;

/*
import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  id: number;
}

const initialValue: User[] = [{ name: '', id: 0 }];
const App = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>(initialValue);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>User Name is: {user.name}</p>
      ))}
    </div>
  );
};

export default App;
 */
