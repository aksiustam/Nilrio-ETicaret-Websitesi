"use client";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
const DressSizeTable = (props) => {
  const data = props.size.filter((item) => item?.SizeType?.type === "dress");

  const [modalShow, setModalShow] = useState(false);
  const [modalsize, setModalSize] = useState({});
  const [message, setMessage] = useState("");

  const onDelete = async (data) => {
    Swal.fire({
      title: data.name + " Adlı Boyut Arşivlenecek ",
      showDenyButton: true,
      confirmButtonText: "Arşiv",
      denyButtonText: "Hayır",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formData = { ...data, archive: true };
        await axios
          .put(`/api/catbrand/size`, formData)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Başarıyla Arşivlendi",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: JSON.stringify(error.response.data),
            });
          });
      }
    });
  };

  const updateSize = async () => {
    await axios
      .put(`/api/catbrand/size`, modalsize)
      .then(() => {
        setMessage("Başarıyla Değiştirildi");
      })
      .catch((error) => {
        setMessage(JSON.stringify(error.response.data));
      });
  };
  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="tw-flex tw-flex-1">
            <div className="fotm-group tw-w-full">
              <label htmlFor="product_name">
                Boyut Değiştir<span className="text-danger">*</span>
              </label>
              <div className="tw-flex ">
                <input
                  type="number"
                  id="product_colorindex"
                  className="form-control"
                  placeholder="Sıra No"
                  value={modalsize?.index}
                  onChange={(e) =>
                    setModalSize((prev) => ({
                      ...prev,
                      index: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  id="product_size"
                  className="form-control"
                  placeholder="Boyut Ekle"
                  value={modalsize?.name}
                  onChange={(e) =>
                    setModalSize((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />

                <button
                  className="theme-btn-one bg-black btn_sm"
                  onClick={() => updateSize()}
                >
                  Değiştir
                </button>
                <div className="tw-font-bold tw-text-xl tw-text-red-600">
                  {message}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="vendor_order_boxed pt-4">
            <div className="table-responsive">
              <table className="table pending_table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Sıra</th>
                    <th scope="col">Ad</th>
                    <th scope="col">Düzenle/Arşiv</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((data) => {
                    return (
                      <tr key={data?.id}>
                        <td
                          className="hover:tw-text-blue-600 tw-cursor-pointer"
                          onClick={() => {
                            setModalShow(true);
                            setModalSize(data);
                          }}
                        >
                          #{data?.index}
                        </td>
                        <td
                          className="hover:tw-text-blue-600 tw-cursor-pointer"
                          onClick={() => {
                            setModalShow(true);
                            setModalSize(data);
                          }}
                        >
                          {data?.name}
                        </td>

                        <td>
                          <button
                            onClick={() => {
                              setModalShow(true);
                              setModalSize(data);
                            }}
                          >
                            <FaRegEdit size={26} color="green" />
                          </button>

                          <button onClick={() => onDelete(data)}>
                            <FaRegTrashAlt size={26} color="red" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DressSizeTable;