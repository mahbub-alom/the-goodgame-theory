import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
        );
        const result = await response.json();
        setQuote(`"${result[0]}"`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchTrigger]);

  const handleButtonClick = () => {
    setFetchTrigger(!fetchTrigger);
  };

  return (
    <div className="card bg-base-100 my-5 w-96 mx-auto shadow-xl">
      <h1 className="text-2xl mx-auto">Here is some important Quote: </h1>
      <div className="card-body">
        <h2 className="card-title">{quote ? quote : "Loading..."}</h2>
        <div className="card-actions justify-end">
          <button onClick={handleButtonClick} className="btn btn-outline btn-accent">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
