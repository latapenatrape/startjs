import Auth from "./components/Auth.js";
function App() {
  
  return (
      
    <BrowserRouter>
    <Routes>
    <Route path='/auth' element={<Auth/>}/>
    <Route path='/' element={<Main/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;