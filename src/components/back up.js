import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    getAllCategory,
    addCategory,
    updateCategories,
    deleteCategories as deleteCategoriesAction
} from '../actions';

import { Modal, Button } from "react-bootstrap";

import Input from './UI/Input';
// import AddCategoryModal from './components/AddCategoryModal';
// import 'react-checkbox-tree/lib/react-checkbox-tree.css';
const Addcategory = (props) => {
    

    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    // const [categoryImage, setCategoryImage] = useState('');

    // const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    // const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
    // const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
   
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);


    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(

                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>

            );
        }
        return myCategories;
    }
   
    const [show, setShow] = useState(false);

    const handleClose = () => {

        const form = new FormData();

        // const cat ={
        //     categoryName,
        //     parentCategoryId
        // };
        // console.log(cat);

        if (categoryName === "") {
            alert('Category name is required');
            setShow(false);
            return; 
        }

        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        // form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');
        setShow(false);
    }
    const handleShow = () => setShow(true);
const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({
                value: category._id,
                name: category.name,
                parentId: category.parentId,
                type: category.type
            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }
      const handleCategoryInput = (key, value, index, type) => {
        console.log(value);
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) =>
                index == _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedExpandedArray = expandedArray.map((item, _index) =>
                index == _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpandedArray);
        }
    }


    return (
        <div className="page-wrapper">

            <div className="content container-fluid">



                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Category</h3>

                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Add Category</h4>
                            </div>
                            <div className="card-body">
                            <div class="d-grid gap-2 col-8 mx-auto">
                                <button onClick={handleShow} className="btn btn-outline-secondary"><span>Add Category</span></button>
                            </div>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Category</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                       <form>
                                       <Input
                                            value={categoryName}
                                            placeholder={`Category Name`}
                                            onChange={(e) => setCategoryName(e.target.value)}
                                            className="form-control"

                                        />
                                        <label>Select parent category</label>
                                        <select
                                            className="form-control"
                                            value={parentCategoryId}
                                            onChange={(e) => setParentCategoryId(e.target.value)}>
                                            <option>--Select category--</option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </select>

                                       </form>
                                      
                                        {/* <input
                                            type="file"
                                            //  value={categoryName}
                                            //  placeholder={`Category Name`}
                                            //  onChange={(e) => setCategoryName(e.target.value)}
                                            className="form-control"

                                        /> */}

                                    </Modal.Body>
                                    <Modal.Footer>
                                                 
                                        <Button variant="secondary" onClick={handleClose}>
                                            Save category
          </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Manage Category</h4>
                            </div>
                            <div className="card-body">

                            <div className="menuHeader">
            <ul>
                { category.categories.length > 0 ? renderCategories(category.categories) : null }
            </ul>
        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    );
}
export default Addcategory