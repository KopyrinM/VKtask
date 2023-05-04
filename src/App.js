import React from "react";
import { Component } from "react";
import DropdownTower from "./components/dropdownTower/dropdownTower";
import DropdownFloors from "./components/dropdownFloors/dropdownFloors";
import DropdownRooms from "./components/dropdownRooms/dropdownRooms";
import { DatePicker, TimePicker } from "antd";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tower: "A",
      floor: 3,
      room: 1,
      date: null,
      timeStart: null,
      timeEnd: null,
      message: "",
      answer:false,
    };
    this.handleTowerChange = this.handleTowerChange.bind(this);
    this.handleFloorsChange = this.handleFloorsChange.bind(this);
    this.handleRoomsChange = this.handleRoomsChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeStartChange = this.handleTimeStartChange.bind(this);
    this.handleTimeEndChange = this.handleTimeEndChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.submitJSON = this.submitJSON.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
  }

  handleTowerChange(e) {
    this.setState({ tower: e.target.value });
  }
  handleFloorsChange(e) {
    this.setState({ floor: parseInt(e.target.value) });
  }
  handleRoomsChange(e) {
    this.setState({ room: parseInt(e.target.value) });
  }
  handleDateChange(date) {
    this.setState({ date });
  }
  handleTimeStartChange(timeStart) {
    this.setState({ timeStart });
  }
  handleTimeEndChange(timeEnd) {
    this.setState({ timeEnd });
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleAnswerClick= () =>{
    this.setState({answer:true})
  }

  submitJSON() {
    const data = {
      tower: this.state.tower,
      floor: this.state.floor,
      room: this.state.room,
      date: this.state.date ? this.state.date.format("YYYY-MM-DD") : null,
      timeStart: this.state.timeStart
        ? this.state.timeStart.format("HH:mm")
        : null,
      timeEnd: this.state.timeEnd ? this.state.timeEnd.format("HH:mm") : null,
      message: this.state.message,
    };
    console.log(JSON.stringify(data));
  }

  clearInfo() {
    this.setState({
      tower: "А",
      floor: 3,
      room: 1,
      date: null,
      timeStart: null,
      timeEnd: null,
      message: ""
    });
  }

  render() {
    return (
      <div className="screen">
        <div className="container">
          <div className="App">
            <h1 className="app__title">Форма бронирования переговорной</h1>
            <div className="app__dropdown">
              <div className="app__dropdown_item dropdown_tower">
                <DropdownTower
                  value={this.state.tower}
                  onChange={this.handleTowerChange}
                />
              </div>
              <div className="app__dropdown_item dropdown_floor">
                <DropdownFloors
                  value={this.state.floor}
                  onChange={this.handleFloorsChange}
                />
              </div>
              <div className="app__dropdown_item dropdown_room">
                <DropdownRooms
                  value={this.state.room}
                  onChange={this.handleRoomsChange}
                />
              </div>
            </div>
            <div className="second_section">
              <div className="app__date">
                <div className="app__date_datapicker">
                  <DatePicker
                    onChange={this.handleDateChange}
                    placeholder="Дата"
                  />
                </div>
                <div className="app__date_timepickerStart">
                  <TimePicker
                    format="HH:mm"
                    placeholder="Время начала"
                    onChange={this.handleTimeStartChange}
                  />
                </div>
                <div className="app__date_timepickerEnd">
                  <TimePicker
                    format="HH:mm"
                    placeholder="Время окончания"
                    onChange={this.handleTimeEndChange}
                  />
                </div>
              </div>
              <div className="app__message">
                <textarea
                  className="app__message_input"
                  placeholder="Комментарий"
                  type="text"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                ></textarea>
              </div>
            </div>
            <div className="app__buttons">
              <button className="app__buttons_submit" onClick={this.submitJSON}>
                Отправить
              </button>
              <button className="app__buttons_clear" onClick={this.clearInfo}>
                Очистить форму
              </button>
            </div>
              {/* <p>Башня: {this.state.tower}</p>
            <p>Этаж: {this.state.floor}</p>
            <p>Номер переговорной: {this.state.room}</p>
            <p>
              Выбрана дата:{" "}
              {this.state.date ? this.state.date.format("DD.MM.YYYY") : ""}
            </p>
            <p>
              Выбрано время:{" "}
              {this.state.timeStart ? this.state.timeStart.format("HH:mm") : ""}{" "}
              - {this.state.timeEnd ? this.state.timeEnd.format("HH:mm") : ""}
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
