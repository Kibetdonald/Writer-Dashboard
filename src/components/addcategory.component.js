import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckboxTree from 'react-checkbox-tree';
import { Container, Row, Col } from 'react-bootstrap';
import {
    getAllCategory,
    addCategory,
    updateCategories,
    deleteCategories as deleteCategoriesAction
} from '../actions';
import {
    IoIosCheckboxOutline,
    IoIosCheckbox,
    IoIosArrowForward,
    IoIosArrowDown,
    IoIosAdd,
    IoIosTrash,
    IoIosCloudUpload
} from 'react-icons/io'
import { Modal, Button } from "react-bootstrap";

import 'react-checkbox-tree/lib/react-checkbox-tree.css';
const Addcategory = (props) => {


    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
    const { size } = props;

    console.log({ expandedArray, checkedArray })


    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(

                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
            );
        }
        return myCategories;
    }

    const [show, setShow] = useState(false);
    const handleCloseModal = () => {

    }
    const handleClose = () => {

        const form = new FormData();

        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
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
            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }
    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
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

    const updateCategoriesForm = () => {
        const form = new FormData();

        expandedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        dispatch(updateCategories(form));

    }
    const updateCategory = () => {
        updateCheckedAndExpandedCategories();
        setUpdateCategoryModal(true);
    }
    const updateCheckedAndExpandedCategories = () => {
        const categories = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value);
            category && checkedArray.push(category);
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value);
            category && expandedArray.push(category);
        })
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
    }
    const deleteCategory = () => {
        updateCheckedAndExpandedCategories();
        setDeleteCategoryModal(true);
    }
    const deleteCategories = () => {
        const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }));
        const expandedIdsArray = expandedArray.map((item, index) => ({ _id: item.value }));
        const idsArray = expandedIdsArray.concat(checkedIdsArray);

        if (checkedIdsArray.length > 0) {
            dispatch(deleteCategoriesAction(checkedIdsArray))
                .then(result => {
                    if (result) {
                        dispatch(getAllCategory())
                        setDeleteCategoryModal(false)
                    }
                });
        }

        setDeleteCategoryModal(false);

    }


    const renderDeleteCategoryModal = () => {
        return (

            <Modal show={deleteCategoryModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm deleting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                    {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button className="primary" onClick={deleteCategories}>
                        Yes
                    </Button>


                </Modal.Footer>
            </Modal>
        );
    }

    const categoryList = createCategoryList(category.categories);


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


                                <Modal show={show} handleClose={() => setDeleteCategoryModal(false)} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Category</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <input
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

                                        <input type="file" name="categoryImage" onChange={handleCategoryImage} />




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

                                {/* Update category modal here */}
                                <Modal


                                    show={updateCategoryModal}
                                    onHide={handleCloseModal}

                                    handleClose={updateCategoriesForm}
                                    // onSubmit={onSubmit}
                                    // size="lg"
                                    // modalTitle={modalTitle}
                                    size={size}
                                >

                                    <Modal.Header closeButton>
                                        <Modal.Title>Update Category</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col>
                                                <h6>Parent Category</h6>
                                            </Col>
                                        </Row>
                                        {
                                            expandedArray.length > 0 &&
                                            expandedArray.map((item, index) =>
                                                <Row key={index}>
                                                    <Col>
                                                        <input
                                                            value={item.name}
                                                            placeholder={`Category Name`}
                                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
                                                        />
                                                    </Col>

                                                    <Col>
                                                        <select
                                                            className="form-control"
                                                            value={item.parentId}
                                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}>
                                                            <option>select category</option>
                                                            {
                                                                categoryList.map(option =>
                                                                    <option key={option.value} value={option.value}>{option.name}</option>
                                                                )
                                                            }
                                                        </select>
                                                    </Col>
                                                    <Col>
                                                        <select
                                                            className="form-control"
                                                            value={item.type}
                                                            onChange={(e) => handleCategoryInput('type', e.target.value, index, 'expanded')}
                                                        >
                                                            <option value="">Select Type</option>
                                                            <option value="store">Store</option>
                                                            <option value="product">Product</option>
                                                            <option value="page">Page</option>
                                                        </select>
                                                    </Col>
                                                </Row>

                                            )
                                        }
                                        <h6>Child Categories</h6>
                                        {
                                            checkedArray.length > 0 &&
                                            checkedArray.map((item, index) =>
                                                <Row key={index}>
                                                    <Col>
                                                        <input
                                                            value={item.name}
                                                            placeholder={`Category Name`}
                                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <select
                                                            className="form-control"
                                                            value={item.parentId}
                                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}>
                                                            <option>select category</option>
                                                            {
                                                                categoryList.map(option =>
                                                                    <option key={option.value} value={option.value}>{option.name}</option>
                                                                )
                                                            }
                                                        </select>
                                                    </Col>
                                                    <Col>
                                                        <select
                                                            className="form-control"
                                                            value={item.type}
                                                            onChange={(e) => handleCategoryInput('type', e.target.value, index, 'checked')}

                                                        >
                                                            <option value="">Select Type</option>
                                                            <option value="store">Store</option>
                                                            <option value="product">Product</option>
                                                            <option value="page">Page</option>
                                                        </select>
                                                    </Col>
                                                </Row>

                                            )
                                        }
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button className="primary" onClick={deleteCategories}>
                                            Update
                                        </Button>


                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>

                    </div>

                    {renderDeleteCategoryModal()}
                    {/* {renderAddCategoryModal()} */}

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Manage Category</h4>
                            </div>
                            <div className="card-body">


                                <div className="menuHeader">

                                    <Col md={12}>

                                        <CheckboxTree
                                            nodes={renderCategories(category.categories)}
                                            checked={checked}
                                            expanded={expanded}
                                            onCheck={checked => setChecked(checked)}
                                            onExpand={expanded => setExpanded(expanded)}
                                            icons={{
                                                check: <IoIosCheckbox />,
                                                uncheck: <IoIosCheckboxOutline />,
                                                halfCheck: <IoIosCheckboxOutline />,
                                                expandClose: <IoIosArrowForward />,
                                                expandOpen: <IoIosArrowDown />
                                            }}
                                        />
                                    </Col>
                                    <center>
                                        <button className="btn btn-outline-secondary" onClick={deleteCategory}> <span>Delete</span></button>

                                        <button className="btn btn-outline-secondary" style={{ marginLeft: 30 }} onClick={updateCategory}> <span>Edit</span></button>
                                    </center>
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