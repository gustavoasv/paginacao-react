import { useEffect, useState } from "react";
import { Pagination } from "./components/pagination";
import { Selector } from "./components/Selector";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [ItemsPage, setItemsPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const page = Math.ceil(items.length / ItemsPage);
  const startIndex = currentPage * ItemsPage;
  const endIndex = startIndex + ItemsPage;
  const currentItens = items.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => data);
      setItems(result);
    };
    fetchItems();
    console.log(items);
  }, []);
  return (
    <div>
      {currentItens.map((item: any) => {
        return (
          <div className="item">
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.completed}</span>
          </div>
        );
      })}
      <Selector itemsPage={ItemsPage} setItemsPage={setItemsPage}></Selector>
      <Pagination currentPage={currentPage} page={page} setCurrentPage={setCurrentPage}></Pagination>
    </div>
  );
}
export default App;
