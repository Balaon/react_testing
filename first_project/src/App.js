import logo from './logo.svg';
import './App.css';
import { App as App2 } from "./App2";
import { User } from './components/user'
import { SimpleUser } from "./components/simpleUser";


function App(props) {

  const users = [{
                    name: "Петя",
                    age: 22,
                    gender: "M",
                    address: "Москва", 
                    puppies,
                    description: "Жили у бабуси два веселых гуся",
                  },
                  {
                    name: "Надя",
                    age: 35,
                    gender: "F",
                    address: "Санкт-Петербург", 
                    puppies,
                    description: "Немного лет тому назад, там где сливаяся, шумят",
                  },
                  {
                    name: "Дима",
                    age: 45,
                    gender: "M",
                    address: "Казань", 
                    puppies,
                    description: "Обнявшись будто две сесты, струи Арагви и Куры",
                  },];
  return (
    <div className="App">
        <User description="Какое-то описание для юзера" /> <br />
        <div style= { {display:"flex"} }>
            <SimpleUser name="Иван" age={ 33 }/> 
        </div>
        <div>Yo! { props.name }</div>
        
        <App2 />

    </div>
  );
}

export default App;
