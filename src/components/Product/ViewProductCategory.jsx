import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminDashboard/AdminHeader";
import AdminSidebar from "../AdminDashboard/AdminSidebar";

const ViewProductCategory = ({ adminData }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [msg, setDeleteMsg] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:5000/all-product-category")
      .then((result) => {
        console.log(result.data);
        setCategoryData(result.data);
      })
      .catch((e) => {
        console.log("Something Went Wrong!!");
      });
  }, []);

  const deleteCategory = (scid) => {
    axios
      .delete(`http://localhost:5000/product-category/delete/${scid}`)
      .then(() => {
        setDeleteMsg("You have successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const headers = [
    { key: "categoryName", label: "Product Category Name" },
    { key: "categoryDesc", label: "Description" },
    { key: "createdAt", label: "Added Date" },
    { key: "action", label: "Action" },
  ];

  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader />

        <div className="row py-4 me-4">
          <AdminSidebar adminData={adminData} />

          <div className="col-md-9">
            <div className="container">
              <div className="row">
                {categoryData?.length > 0 ? (
                  <>
                    <div className="col-md-12 mt-5">
                      <div className="card">
                        <div className="add_category_btn">
                          <Link
                            to="/add-product-category"
                            className="btn btn-outline-success"
                            style={{
                              float: "right",
                              margin: "10px 10px 0 0",
                              border: "2px solid green",
                              borderRadius: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Add New Category
                          </Link>
                        </div>
                        <h3 className="text-center pt-3">
                          Product Category Details
                        </h3>

                        <div className="card-body">
                          <table
                            className="table table-bordered table-striped table-responsive-md table-responsive-sm"
                            style={{
                              border: "1px solid black",
                              borderRadius: "10px",
                            }}
                          >
                            <thead>
                              <tr>
                                {headers.map((row) => {
                                  return <th key={row.key}>{row.label}</th>;
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              {/* for displaying category data : use loop*/}
                              {categoryData.map((singleCategory) => {
                                return (
                                  <tr>
                                    <td>{singleCategory.categoryName}</td>
                                    <td>{singleCategory.categoryDesc}</td>
                                    <td>{singleCategory.createdAt}</td>
                                    <td>
                                      <img
                                        src={
                                          "http://localhost:5000/" +
                                          singleCategory.image
                                        }
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </td>

                                    <Link
                                      to={`/update-product-category/${singleCategory._id}`}
                                      className="d-flex"
                                    >
                                      <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                    </Link>
                                    <span
                                      onClick={() =>
                                        deleteCategory(singleCategory._id)
                                      }
                                      style={{ cursor: "pointer" }}
                                      className="d-flex"
                                    >
                                      <i className="bi bi-trash-fill fa-2x text-danger"></i>
                                    </span>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row">
                        <div className="col-md-10 py-5">
                            <Link to="/add-product-category" className="btn btn-primary float-end">Add Category</Link>
                            <h1 className="mt-5">There is no any product category added</h1>
                        </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <h1>{msg}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductCategory;
