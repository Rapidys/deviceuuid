import './App.css';
import DeviceUUID from 'device-uuid';
import {useEffect} from "react";

function App() {

  var asd = DeviceUUID;

  useEffect(() => {
    alert(`your unique id is : ${asd.DeviceUUID().get()}`)
  },[asd])
  return (
    <div className="App">
      {/*{uuid}*/}
    </div>
  );
}

export default App;
