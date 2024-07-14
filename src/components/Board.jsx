const Board = ({task}) =>{
    console.log(task);
    return (
        <>
            <div className="max-w-xl flex flex-col items-center border">
                <p>{task}</p>
            </div>
        </>
    )
}

export default Board;