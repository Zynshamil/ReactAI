import './App.css';
import {Configuration, OpenAIApi} from 'openai'
import OptionSelection from './component/OptionSelection';
import { arrayItems } from './AIOptions';
import Translation from './component/Translation';
import { useState } from 'react';


function App() {
  const configuration = new Configuration({
  apiKey:  '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',
});

 const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
 
  const selectOption = (option) => {
    setOption(option);
  };
  
 
  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);
    
    console.log(response.data.choices[0].text)
    setResult(response.data.choices[0].text);
  };
   
  
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result}  />
      )}
    </div>
  );
}

export default App;
