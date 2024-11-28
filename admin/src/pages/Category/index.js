
import { IoHome } from "react-icons/io5";
import Button from '@mui/material/Button';
import React, { useContext, useEffect, useState } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled, emphasize } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import DashboardBox from "../Dashboard/components/dahsboardBox";
import { fetchDataFromApi } from "../../utils/api";


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

///StyleBreadcrumb///
const StyleBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ?
        theme.palette.grey[100] : theme.palette.grey[800];

    return {
        backgroundColor, Height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12)
        },
    };

});


const Category = () => {
    const context = useContext(MyContext);

    const [open, setOpen] = useState(false);
    const [cateData, setCatData] = useState([]);
    const [editFields, setEditFields] = useState({});
    const [editId, setEditId] = useState(null);

    const [page, setPage] = useState(1);

    const [isLoading, setisLoading] = useState(false);

    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });

    useEffect(() => {
        context.setIsHideSidebarAndHeader(false);

        window.scrollTo(0, 0);
        context.setProgress(20)
        fetchDataFromApi('/api/category').then((res) => {
            setCatData(res);
            console.log(res);
            context.setProgress(100);
        })

    }, []);

    const addImgUrl = (e) => {
        const arr = [];
        arr.push(e.target.value);
        setFormFields(() => (
            {
                ...formFields,
                [e.target.name]: arr
            }
        ))
    }

    const changeInput = (e) => {
        setFormFields(() => (
            {
                ...formFields,
                [e.target.name]: e.target.value
            }
        ))

    }

    const handleClose = () => {
        setOpen(false);
    };

    const editCategory = (id) => {
        setFormFields({
            name: '',
            images: '',
            color: ''
        });
        setOpen(true);
        setEditId(id);

        fetchDataFromApi(`/api/category/${id}`).then((res) => {
            setFormFields({
                name: res.name,
                images: res.imgaes,
                color: res.color
            });
            console.log(res);
        })
    }

    const categoryEditFun = (e) => {
        e.preventDefault();
        setisLoading(true);

        context.setProgress(40);
        editData(`/api/category/${editId}`, formFields).then((res) => {

            fetchDataFromApi('/api/category').then((res) => {
                setCatData(res);
                setOpen(false);
                setisLoading(false);
            });

            context.setAlertBox({
                open:true,
                error:false,
                msg:'The Category Updated.'
            });
            context.setProgress(100);
        })
    }


    const deleteCat = (id) => {
        deleteData(`/api/category/${id}`).then((res) => {
            fetchDataFromApi('/api/category').then((res) => {
                setCatData(res);
            })

        })
    }

    const handleChange = (event, value) => {
        context.setProgress(40);
        fetchDataFromApi(`/api/category?page=${value}`).then((res) => {
            setCatData(res);
            context.setProgress(100);
        })
    };



    return (
        <>
            <div className="right-content w-100 ">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0"> Category List</h5>
                    <div className="ml-auto align-items-center">
                        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                            <StyleBreadcrumb
                                componet="a"
                                label="Dashboard"
                                href="#"
                                icon={<IoHome fontSize="small" />}
                            />

                            <StyleBreadcrumb
                                componet="a"
                                label="Category"
                                href="#"
                            />
                            <StyleBreadcrumb
                                label="Category List"
                                detelIcon={<MdEdit />}
                            />
                        </Breadcrumbs>

                        <Link to="/category/add">
                            <Button className="btn-blue ml-3 pl-3 pr-3">Add Category</Button>
                        </Link>
                    </div>
                </div>


                <div className="card shadow border-0 p-3 mt-4">
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark align-items-center justify-content-center text-center">
                                <tr>                                    
                                    <th>IMAGE</th>
                                    <th style={{ width: '170px' }}>CATEGORY</th>
                                    <th>COLOR</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cateData?.categoryList?.length !== 0 && cateData?.categoryList?.map((item, index) => {
                                        return (
                                            <tr>
                                                //*{<td><Checkbox />
                                                   //* #{index + 1}
                                                //*</td>}
                                                <td>
                                                    <div className="d-flex align-content-center productsBox">
                                                        <div className="imgWrapper">
                                                            <div className="img">
                                                                <img className="w-100" src={item.images[0]} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <span className="dot" style={{ background: item.color }}>
                                                        {item.color}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="actions d-flex align-items-center">
                                                        <Button className="success" color="success"
                                                            onClick={() => editCategory(item.id)}>
                                                            <MdEdit />
                                                        </Button>
                                                        <Button className="error" color="error"
                                                            onClick={() => deleteCat(item.id)}>
                                                            <MdDelete />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            <Pagination count={cateData?.totalPages} color="primary" className="pagination"
                                showFirstButton showLastButton onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>



            <Dialog
                className="editmModalCat"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Edit Category</DialogTitle>
                <form>
                    <DialogContent>
                        <div className="form-group mb-3">
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                label="Category Name"
                                type="text"
                                fullWidth
                                value={formFields.name}
                                onChange={changeInput}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="images"
                                name="images"
                                label="Images Url"
                                type="text"
                                fullWidth
                                value={formFields.images}
                                onChange={addImgUrl}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="color"
                                name="color"
                                label="Color"
                                type="text"
                                fullWidth
                                value={formFields.color}
                                onChange={changeInput}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="outlined">Cancel</Button>
                        <Button type="button" variant="contained" onClick={categoryEditFun}> Submit
                            {isLoading === true ? <CircularProgress color="inherit" className="loader" /> : 'submit'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

        </>

    )

}

export default Category;
