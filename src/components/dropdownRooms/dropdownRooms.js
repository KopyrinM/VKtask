import './dropdownRooms.css'

const DropdownRooms = ({value, onChange}) =>{
    const rooms = []
    for (let i = 1; i<11; i++){
        rooms.push(<option key={i} value={i}>{i}</option>)
    }
    return(
        <select className="dropdown" value={value} onChange={onChange}>{rooms}</select>
    )
}

export default DropdownRooms;