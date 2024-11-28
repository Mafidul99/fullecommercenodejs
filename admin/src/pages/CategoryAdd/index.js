
import { IoHome } from "react-icons/io5";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled, emphasize } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { MdCloudUpload } from "react-icons/md";
import CircularProgress from '@mui/material/CircularProgress';


import React, { useContext, useState } from "react";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

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
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };

});

const CategoryAdd = () => {

    const [isLoading, setisLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });

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

    const history = useNavigate();

    const context = useContext(MyContext);

    const changeInput = (e) => {
        setFormFields(() => (
            {
                ...formFields,
                [e.target.name]: e.target.value
            }
        ))

    }

    const addCategory = (e) => {
        e.preventDefault();

        if (formFields.name !== "" && formFields.images.length !== 0 && formFields.color !== "") {
            setisLoading(true);

            postData('/api/category/create', formFields).then((res) => {
                setisLoading(false);
                history('/category');
            })
        } else {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'Please Fill all The fields'
            })
            return false;
        }

    }


    return (
        <>
            <div className="right-content w-100 ">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Category Add</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyleBreadcrumb
                            componet="a"
                            label="Dashboard"
                            href="#"
                            icon={<IoHome fontSize="small" />}
                        />

                        <StyleBreadcrumb
                            componet="a"
                            label="Categorys"
                            href="#"
                        />
                        <StyleBreadcrumb
                            label="Category Add"
                        />
                    </Breadcrumbs>
                </div>

                <form className='form' onSubmit={addCategory}>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <div className='card p-4'>
                                <div className='form-group'>
                                    <h6>Category Name</h6>
                                    <input type='text' name="name" onChange={changeInput} />
                                </div>
                                <div className='form-group'>
                                    <h6>Images URL</h6>
                                    <input type='text' name="images" onChange={addImgUrl} />
                                </div>
                                <div className='form-group'>
                                    <h6>Color</h6>
                                    <input type='text' name="color" onChange={changeInput} />
                                </div>

                                <Button type="submit" className='btn__blue btn-lg btn-big'>
                                    <MdCloudUpload />&nbsp;
                                    {isLoading === true ?
                                        <CircularProgress color="inherit" className="loader" />
                                        : 'PUBLISH AND VIEW'
                                    }
                                </Button>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default CategoryAdd;