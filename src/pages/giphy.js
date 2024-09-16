import React, { useEffect, useState } from "react";
const url =
  "https://api.giphy.com/v1/gifs/trending?api_key=ILjJ2CnFkNeoHcQMxvgHseexRzjtbTPx";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Giphy = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(url);
      const { data } = await response.json();
      setGifs(data);
    };
    getGifs();
  }, []);

  const [searchValue, setsearchValue] = useState("");

  const handleChange = (event) => {
    setsearchValue(event.target.value);
  };
  const [offset, setOffset] = useState(0);

  const onSearch = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ILjJ2CnFkNeoHcQMxvgHseexRzjtbTPx&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(url);
    const { data } = await response.json();
    console.log(data);
    setGifs(data);
  };
  const clickedPage = async (number) => {
    const newOffSet = number * 25;
    setOffset(newOffSet);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ILjJ2CnFkNeoHcQMxvgHseexRzjtbTPx&q=${searchValue}&limit=25&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(url);
    const { data } = await response.json();
    setGifs(data);
  };

  return (
    <div className="mx-auto flex justify-center">
      <div className="flex flex-col">
        <div className="flex max-w-[1700px] justify-end mb-10 gap-5 ">
          <input
            placeholder="Search"
            className="input input-bordered flex items-center gap-2"
            onChange={handleChange}
          />
          <button onClick={onSearch} className="btn">
            Submit
          </button>
        </div>
        <div className="grid grid-cols-3 mb-60">
          {gifs.map((gif) => {
            return <img key={gif.id} src={gif.images.original.url} alt="gif" />;
          })}
        </div>
        <div className="flex gap-6">
          {numbers.map((number, index) => {
            return (
              <button
                onClick={() => clickedPage(number)}
                key={index}
                className="btn btn-primary"
              >
                {number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Giphy;
