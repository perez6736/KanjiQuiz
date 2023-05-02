import { createContext, useState, useCallback } from "react";
import axios from "axios";

const KanjiContext = createContext();

function Provider({ children, initialKanjis }) {
  const [kanjis, setKanjis] = useState([initialKanjis]);

  const fetchKanjisJouyou1 = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/api/list/jouyou/1");
    setKanjis(response.data.kanjis);
  }, []);

  const valueToShare = {
    kanjis: kanjis,
    fetchKanjisJouyou1,
  };

  return (
    <KanjiContext.Provider value={valueToShare}>
      {children}
    </KanjiContext.Provider>
  );
}

export { Provider };
export default KanjiContext;
