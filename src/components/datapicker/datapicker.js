// import { DatePicker, Space } from 'antd';
// const { RangePicker } = DatePicker;

// const TimesPicker = () => (
//   <Space direction="vertical" size={12}>
//     <RangePicker showTime />
//   </Space>
// );
// export default TimesPicker;

import React from "react";
import { Component } from "react";
import { TimePicker } from "antd";

class TimesPicker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeStart: null,
        timeEnd: null,
      };
    }
  
    handleTimeStart = (timeStart) => {
      this.setState({ timeStart });
      this.props.onChange(timeStart);
    };
  
    handleTimeEnd = (timeEnd) => {
      this.setState({ timeEnd });
      this.props.onChange(timeEnd);
    };
  
    render() {
      return (
        <div>
          Время начала:{" "}
          <TimePicker
            value={this.state.timeStart}
            format="HH:mm"
            onChange={this.handleTimeStart}
          />
          Время окончания:{" "}
          <TimePicker
            value={this.state.timeEnd}
            format="HH:mm"
            onChange={this.handleTimeEnd}
          />
        </div>
      );
    }
  }
  
  export default TimesPicker;