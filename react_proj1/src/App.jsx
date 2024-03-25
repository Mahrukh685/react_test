import Image from "./Profile";
function App() {
  return (
    <div>
      <h1>Hello World </h1>
      <h1> {name} </h1>
      <h1> {person.name} </h1>
      <h1> {person.age} </h1>
      <Image name={"maha"} />
      <Image name={"aliza"} />
      <Image name="hamza" />
    </div>
  );
}

let name = "mahrukh";

const person = {
  name: "Mahrukh",
  age: "22",
};

export default App;
