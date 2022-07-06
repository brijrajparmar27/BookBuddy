import { useEffect, useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Home.css";
import useInsert from "../../Hooks/useInsert";
import useSnapshot from "../../Hooks/useSnapshot";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [newnote, setNewNote] = useState();

  const { insert } = useInsert();
  const { loading, error, getDocs } = useSnapshot();
  const [docs, setDocs] = useState();

  useEffect(() => {
    !user && navigate("/login");
    getDocs(setDocs);
  }, [user]);

  const handleAdd = (e) => {
    e.preventDefault();
    newnote && insert(newnote);
    e.target.reset();
  };

  const hadleChange = (e) => {
    var text = e.target.value.trim();
    if (text !== "") {
      setNewNote(text);
    }
  };
  
  return (
    <div className="Home">
      <h2>Home</h2>
      <div>
        <form
          className="add_contain"
          onSubmit={(e) => {
            handleAdd(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              hadleChange(e);
            }}
          />
          <input type="submit" value="Add Book" className="submit_btn" />
        </form>
      </div>
      <div className="booksContain">
        {docs &&
          docs.map((each) => {
            return <BookCard each={each} key={each.id} />;
          })}
        {loading && <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_htsctvhl.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>}
        {!loading && docs && docs.length==0 && <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_gctc76jz.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>}
      </div>
    </div>
  );
};

export default Home;
