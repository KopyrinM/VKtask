import './dropdownFloors.css'

const DropdownFloors = ({value, onChange}) => {
    const floors =[];
    for (let i =3; i<28; i++){
        floors.push(<option key={i} value={i}>{i}</option> )
    }
    return (
        <select className="dropdown" value={value} onChange={onChange}>{floors}</select>
    )
}

export default DropdownFloors;