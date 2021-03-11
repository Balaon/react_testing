import logo from './logo.svg';
import './App.css';
import { App as App2 } from "./App2";
import { User } from './components/user'
import { SimpleUser } from "./components/simpleUser";


function App(props) {

  const users = [{
                    id: 1,
                    name: "Петя",
                    age: 22,
                    gender: "M",
                    address: "Москва", 
                    puppies: [],
                    description: "Жили у бабуси два веселых гуся",
                  },
                  {
                    id: 2,
                    name: "Надя",
                    age: 35,
                    gender: "F",
                    address: "Санкт-Петербург", 
                    puppies: [],
                    description: "Немного лет тому назад, там где сливаяся, шумят",
                  },
                  {
                    id: 3,
                    name: "Дима",
                    age: 45,
                    gender: "M",
                    address: "Казань", 
                    puppies: [],
                    description: "Обнявшись будто две сесты, струи Арагви и Куры",
                  },];
    
    const renderUsers = ({
        id,
        name,
        age,
        gender,
        address, 
        puppies,
        description,
        }) => (<SimpleUser 
                    key={ id }
                    name={ name }
                    age={ age }
                    gender={ gender }
                    address={ address }
                    puppies={ puppies }
                    description={ description }
    /> );


    return (
        <div className="App">
            <User description="Какое-то описание для юзера" /> <br />
            <div style= { {display:"flex"} }>
                {
                    users.map( renderUsers )  
                }
            </div>
            <div>Yo! { props.name }</div>
        
            <App2 />

        </div>
    );
}

export default App;
