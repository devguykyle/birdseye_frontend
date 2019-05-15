import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './index.css';

export class Content extends React.Component {
  render() {
    return (
      <div class="main">
        <section id="tasks">
          <TaskListView/>
        </section>

        <section id="menu-etc">
          <SearchBar/>
        </section>

        <section id="today" class="day-area">
          <TodayView/>
        </section>

        <section id="tomorrow" class="day-area">
          <TomorrowView/>
        </section>
      </div>
    )
  }
}

class TaskListView extends React.Component {

  render() {
    return (
      <div>
        <div id="task-header">
          <h1>Tasks</h1>
          <FloatingActionButtonZoom/>
        </div>
        <div class="createTaskButton">
          <Button id="addTaskButton" variant="text" color="primary">
            + Create Task
          </Button>
        </div>
        <div class="taskCardDiv">
          <ul class="taskListMain">
            <Task todo="Some stuff" project="Birdseye - Application"/>
          </ul>
        </div>
      </div>
    )
  }
}

class Task extends React.Component {

  render(){
    return(
      <li class="taskCard" >
        <div id="checkbox">
          <Checkbox />
        </div>
        <div id="cardMainText">
          <span id="project">{this.props.project}</span> <br/>
          <span class={this.props.classname} id="taskName">{this.props.todo}</span>
        </div>
        <div id="cardDateTime">
          Today <br/> 8:00am
        </div>
      </li>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchValue: ''};
  }
  render(){
    return (
      <AppBar class="menu-etc" position="static">
        <div class="mainBar" id="barIcon">
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
        </div>
        <div class="mainBar" id="searchBar">
          <div class="searchIcon">
            <SearchIcon />
          </div>
          <input type="text"/>
        </div>
        <div class="mainBar" id="upgradeOption">
          10 days left <a href="">Upgrade</a>
        </div>
      </AppBar>
    )
  }
}



class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <div>
        <AppBar style={{boxShadow: "none"}} position="static" color="purple">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
          >
            <Tab label="All" />
            <Tab label="Projects" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}


class TodayView extends React.Component {

  render() {
    return (
      <div>
        <div id="today-header">
          <h1>Today</h1>
          <h6>July 26, 2019</h6>
        </div>
        <div class="createTaskButton">
          <Button id="addTaskButton" variant="text" color="primary">
            + Create Task
          </Button>
        </div>
          <ul class="taskList">
            <Task todo="Some stuff" project="Birdseye - Application"/>
            <Task todo="Some stuff" project="Birdseye - Application"/>
          </ul>
          <div class="separator">
            <div class="spacer">
              <section id="dash">
                <span id="completed">Completed</span>
              </section>
            </div>
          </div>
          <ul class="taskList">
            <Task classname="finished" todo="Some stuff" project="Birdseye - Application"/>
            <Task  classname="finished" todo="Some stuff" project="Birdseye - Application"/>
          </ul>
        </div>
    )
  }
}

class TomorrowView extends React.Component {

  render() {
    return (
      <div>
        <div id="tomorrow-header">
          <h1>Tomorrow</h1>
          <h6>July 26, 2019</h6>
        </div>
        <div class="createTaskButton">
          <Button id="addTaskButton" variant="text" color="primary">
            + Create Task
          </Button>
        </div>
          <ul class="taskList">
          </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
