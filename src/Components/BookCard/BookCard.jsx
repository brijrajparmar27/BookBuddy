import "./BookCard.css"
import { MdOutlineDeleteOutline } from "react-icons/md";
import useDelete from "../../Hooks/useDelete";

const BookCard = ({each})=>{

    const {del} = useDelete();

    const handleDel = ()=>{
        del(each.id);
    }

    return <div className="book_card">
        <p>{each.name}</p>
        <div className="del" onClick={handleDel}>
            <MdOutlineDeleteOutline style={{color:"#ef1414"}}></MdOutlineDeleteOutline>
        </div>
    </div>
}

export default BookCard;