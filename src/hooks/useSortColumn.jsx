import React from 'react'

const useSortColumn = (data) => {
    const [sortedProducts, setSortedProducts] = useState(data);

     //! product state'i her güncellendiğinde local state'i de güncelle.
  useEffect(() => {
    setSortedProducts(data);
  }, [data]);

// #49 dk
    const handleSort = (arg, type) => {
        setToggle({ ...toggle, [arg]: toggle[arg] * -1 });
        setSortedProducts(
          sortedProducts
            ?.map((item) => item)
            .sort((a, b) => {
              if (type === "date") {
                return toggle[arg] * (new Date(a[arg]) - new Date(b[arg]));
              } else if (type === "number") {
                return toggle[arg] * (a[arg] - b[arg]);
              } else if (toggle[arg] === 1) {
                return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
              } else {
                return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
              }
            })
        );
      };
  return (
    <div>useSortColumn</div>
  )
}

export default useSortColumn