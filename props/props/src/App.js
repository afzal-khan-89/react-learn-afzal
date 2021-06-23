import logo from './logo.svg';
import './App.css';
import { PropsInFunction } from './Components/PropsInFunction';
import PropsInClass from './Components/PropsInClass';
import PropClassExt from './Components/PropClassExt';
import PropFunctionExt from './Components/PropFunctionExt';

function App() {
  return (
    <div className="App">
      <h1>Props In Function </h1>
      <PropsInFunction bookName="Les Miserables" author="Victor Hugo" > 
        <p>Victor-Marie Hugo (French: [viktɔʁ maʁi yɡo] (About this soundlisten); 26 February 1802 – 22 May 1885) was a French poet, novelist, and dramatist of the Romantic movement. During a literary career that spanned more than sixty years, he wrote abundantly in an exceptional variety of genres: lyrics, satires, epics, philosophical poems, epigrams, novels, history, critical essays, political speeches, funeral orations, diaries, letters public and private, as well as dramas in verse and prose.</p>
      </PropsInFunction>
      <PropsInFunction bookName="Wuthering Heights" author="Emily Jane Bront"> 
        <p>Emily Jane Brontë was an English novelist and poet who is best known for her only novel, Wuthering Heights, now considered a classic of English.</p>
      </PropsInFunction>
      <br/>
      <h1>Props In Class </h1>
      <PropsInClass bookName="Les Miserables" author="Victor Hugo" > 
        <p>Victor-Marie Hugo (French: [viktɔʁ maʁi yɡo] (About this soundlisten); 26 February 1802 – 22 May 1885) was a French poet, novelist, and dramatist of the Romantic movement. During a literary career that spanned more than sixty years, he wrote abundantly in an exceptional variety of genres: lyrics, satires, epics, philosophical poems, epigrams, novels, history, critical essays, political speeches, funeral orations, diaries, letters public and private, as well as dramas in verse and prose.</p>
      </PropsInClass>
      <PropsInClass bookName="Wuthering Heights" author="Emily Jane Bront"> 
        <p>Emily Jane Brontë was an English novelist and poet who is best known for her only novel, Wuthering Heights, now considered a classic of English.</p>
      </PropsInClass>

      <hr/>
        <h1>Destructuring </h1>
        <PropClassExt name = "John" age="34" email="john@gmail.com" />
        <PropClassExt name = "Rohn" age="12" email="rohn@gmail.com" />
        <PropFunctionExt name = "John" age="34" email="john@gmail.com" />
        <PropFunctionExt name = "John" age="34" email="john@gmail.com" />
    </div>
  );
}

export default App;
