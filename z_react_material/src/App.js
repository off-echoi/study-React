import React, { Component } from 'react';
import Customer from './customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width:'100%',
    matginTop:theme.spacing *3,
    overflowX:'auto'
  },
  table:{
    minWidth:1080
  }
});

const customers = [
  {
    'id' : 1,
    'name': '홍길동',
    'dirthday':'961111',
    'gender' : '남자',
    'job': '대학생'
  },
  {
    'id' : 2,
    'name': '홍망동',
    'dirthday':'911111',
    'gender' : '남자',
    'job': '대학생2'
  }
]

class App extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className = {classes.root}>
          <Table className = {classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번 호</TableCell>
                <TableCell>이 름</TableCell>
                <TableCell>생 일</TableCell>
                <TableCell>성 별</TableCell>
                <TableCell>직 업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c=>{
                  return <Customer key={c.id} id={c.id} name={c.name} dirthday={c.birthday} gender={c.gender} job={c.job}/>
              })}
            </TableBody>

          </Table>
      </div>
    );
  }
}

export default withStyles(styles)(App);
