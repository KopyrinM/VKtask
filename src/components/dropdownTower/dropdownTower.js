import './dropdownTower.css'



const DropdownTower = ({ value, onChange }) => {
  return (
    <select className='dropdown' value={value} onChange={onChange}>
      <option value="A">Башня А</option>
      <option value="Б">Башня Б</option>
    </select>
  );
};


export default DropdownTower;