import { Button, Grid, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_LIST, DELETE_LIST_BY_ID, GET_LISTS, UPDATE_List_BY_ID } from '../redux/types';
import { setlistSlice } from '../redux/slice/list';
import Todo from './Todo';

// Functions for Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export const StoreList = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit } = useForm()
  const lists = useSelector(state => state.lists)
  const list = useSelector(state => state.list)
  const [isShown, setIsShown] = useState(false);
  const [listId, setlistId] = useState();




  useEffect(() => {
    return () => {
      dispatch({ type: GET_LISTS })
    };
  }, [])
  const handleChange = (prop) => (event) => {
    dispatch(setlistSlice({ ...list, [prop]: event.target.value }))
  }
  const handleClick = (id) => {
    setIsShown(true);
    setlistId(id)
  };
  const onSubmit = () => {
    list.id === 0 ? dispatch({ type: CREATE_LIST, list: { ...list } }) : dispatch({ type: UPDATE_List_BY_ID, list })
    dispatch(setlistSlice({
      id: 0,
      title: ''
    }))
  };


  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <form>
          <input type="hidden" value={list ? list._id : 0} />
          <TextField sx={{ mt: 3, mr: 2 }} onChange={handleChange('title')} value={list.title} label={"Add Title Of List"} />
          <Button sx={{ mt: 4 }} variant="outlined" onClick={handleSubmit(onSubmit)}>Submit</Button>
        </form>

        <TableContainer component={Paper} sx={{ mt: 4, ml: 2 }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists.map((list, index) => (
                <StyledTableRow key={index + 1}>
                  <StyledTableCell onClick={() => handleClick(list._id)} component="th" scope="row">
                    {list.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button onClick={() => dispatch(setlistSlice(list))} variant="outlined">Edit</Button></StyledTableCell>
                  <StyledTableCell align="right">
                    <Button onClick={() => dispatch({ type: DELETE_LIST_BY_ID, id: list._id })} variant="outlined">Delete</Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={6}>
        {isShown && <Todo listId={listId} />}
      </Grid>
    </Grid>
  )
}
export default StoreList