import './App.css';


function App() {


  return (
    <div className="App">
      <div className='flowchartWrapper' style={{background: 'url(./assets/flowchart/flowTree.png)', backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat'}}>
        <img id="declareFlow" alt="flow1" src="assets/flowchart/declareFlow.png"></img>
        <img id="inputFlow" alt="flow2" src="assets/flowchart/inputFlow.png"></img>
        <img id="processFlow" alt="flow3" src="assets/flowchart/processFlow.png"></img>
        <img id="forFlow" alt="flow4" src="assets/flowchart/forFlow.png"></img>
        <img id="ifFlow" alt="flow5" src="assets/flowchart/ifFlow.png"></img>
        <img id="outputFlow" alt="flow6" src="assets/flowchart/outputFlow.png"></img>
      </div>
      <div className='flowCodeArea'>

      </div>
    </div>
  );
}

export default App;
