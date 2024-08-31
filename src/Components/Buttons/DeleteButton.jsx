import { MdDelete } from "react-icons/md";

const DeleteButton = ({handleDelete}) =>{
    return(
        <div className="w-[5%]">
            <button 
                className="font-bold text-[20px] text-[#ec5f02] hover:text-[#f79239]" 
                onClick={handleDelete}
            >
                <MdDelete />
            </button>
        </div>
    )
}

export default DeleteButton