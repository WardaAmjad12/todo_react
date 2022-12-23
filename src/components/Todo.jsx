import { Button, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { settodoSlice } from '../redux/slice/todo';
import { CREATE_TODO, DELETE_TODO_BY_ID, GET_TODOS, UPDATE_TODO_BY_ID } from '../redux/types';
import { pink } from '@mui/material/colors';



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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function Todo(props) {
    const { handleSubmit } = useForm()
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo)
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        let listId = props.listId


        dispatch({ type: GET_TODOS, listId })
        dispatch(settodoSlice({
            id: 0,
            listId: listId,
            title: '',
            date: undefined,
            isMarked: false
        }))

    }, [props.listId])
    const handleChange = (prop) => (event) => {
        if (prop == 'date') {
            dispatch(settodoSlice({ ...todo, [prop]: event }))

        } else {
            dispatch(settodoSlice({ ...todo, [prop]: event.target.value }))
        }
    }
    const handleMark = (todoo) => {
        const todo = { ...todoo };
        todo.isMarked = !todoo.isMarked
        dispatch({ type: UPDATE_TODO_BY_ID, todo })
    };
    const onSubmit = () => {
        todo.id === 0 ? dispatch({ type: CREATE_TODO, todo: { ...todo } }) : dispatch({ type: UPDATE_TODO_BY_ID, todo })
        dispatch(settodoSlice({
            id: 0,
            listId: props.listId,
            title: '',
            date: undefined,
            isMarked: false
        }))
    };
    return (
        <>
            <form>
                <input type="hidden" value={todo ? todo._id : 0} />
                <TextField sx={{ mt: 3, mr: 2 }} onChange={handleChange('title')} value={todo.title} label={"Add Title Of Todo"} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Add Date"
                        value={todo.date}
                        onChange={handleChange('date')}
                        renderInput={(params) => <TextField sx={{ mt: 3, mr: 2 }} {...params} />}
                    />
                </LocalizationProvider>
                <Button sx={{ mt: 4 }} variant="outlined" onClick={handleSubmit(onSubmit)}>Submit</Button>
            </form>
            <TableContainer component={Paper} sx={{ mt: 4, ml: 2 }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Mark</StyledTableCell>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo, index) => (
                            <StyledTableRow key={index + 1}>
                                <StyledTableCell onClick={() => handleMark(todo)} component="th" scope="row">
                                    {todo.isMarked == true ? <DoneIcon color="success" /> : <CloseIcon sx={{ color: pink[500] }} />}


                                </StyledTableCell>
                                <StyledTableCell >
                                    {todo.title}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {todo.date}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button onClick={() => dispatch(settodoSlice(todo))} variant="outlined">Edit</Button></StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button onClick={() => dispatch({ type: DELETE_TODO_BY_ID, id: todo._id })} variant="outlined">Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Todo
