import React, {useState} from "react";
import Card from "./components/Card";
import "./App.css";

const photos = [
  {
    "id":1,
    "url":"https://picsum.photos/id/1001/200/200",
    "author":"test_user1"
  },
  {
    "id":2,
    "url":"https://picsum.photos/id/1002/200/200",
    "author":"test_user2"
  },
  {
    "id":3,
    "url":"https://picsum.photos/id/1003/200/200",
    "author":"test_user3"
  },
  {
    "id":4,
    "url":"https://picsum.photos/id/1004/200/200",
    "author":"test_user4"
  },
];

function App() {
  const [selected, setSelected] = useState([]);

  const handleSelectAll = () => {
    const allIds = photos.map(photo => photo.id);
    setSelected(allIds);
  };

  const handleUnselectAll = () => {
    setSelected([]);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((data, index) => (
            <Card
              key={index}
              src={data}
              selected={selected.includes(data.id)}
              onSelect={() => setSelected([...selected, data.id])}
              onDeselect={() => setSelected(selected.filter(id => id !== data.id))}
            />
          ))}
        </div>
        <div className="my-3">
          <button className="btn btn-primary mx-3" onClick={handleSelectAll}>
            Select All
          </button>
          <button className="btn btn-secondary mx-3" onClick={handleUnselectAll}>
            Unselect All
          </button>
        </div>
        {selected.length > 0 && (
          <div className="my-5">
            <h2>Selected Images</h2>
            <div className="row">
              {photos
                .filter(photo => selected.includes(photo.id))
                .map((data, index) => (
                  <div className="col mb-5" key={index}>
                    {/* <img src={data.url} alt={data.url} /> */}
                    <h6><span class="badge bg-secondary">{data.id}</span></h6>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;


