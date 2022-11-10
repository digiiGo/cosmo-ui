function App() {
  function isWds(string){
    return string === 'WDS';
  }
  return (
    <div>
      <button onClick={() => isWds('WDS')}>Test</button>
    </div>
  );
}

export default App;
