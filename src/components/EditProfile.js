import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData, UserUploadById, ProfileUserData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Item,
  Input,
  message,
  Button,
  Avatar,
  Modal,
  Upload,
  Image,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import constant from "../constant/constant";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const EditProfile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [AvatarOpen, setAvatarOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const [AvatarIcons, setAvatarList] = useState([]);
  const [selectImg, setSelectImg] = useState("");

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
 
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const [loginData, setLoginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (fieldName, value) => {
    setLoginData({ ...loginData, [fieldName]: value });
  };

  const handleLogin = async () => {
    // Handle form submission
    // Access form data using form.getFieldsValue()
    const formData = form.getFieldsValue();
    console.log("Form Data:", formData);
    // Add the imageBase64 to formData if it exists
    if (selectImg) {
      formData.profile_img = selectImg;
    }
    console.log(formData);
    // Add your logic for handling form data submission

    await dispatch(UserUploadById(getUserResponse.User._id, formData))
    await dispatch(ProfileUserData(getUserResponse.User._id));

  };

  const handleChanges = ({ fileList: newFileList }) => setFileList(newFileList);

  const {
    loading: getprofileUserLoading,
    loginerror: getprofileUserError,
    getprofile: getUserResponse,
  } = useSelector((state) => state.getprofile);

  useEffect(() => {
    if (getUserResponse && getUserResponse.User) {
      form.setFieldsValue({
        firstName: getUserResponse.User.firstname,
        lastName: getUserResponse.User.lastname,
        email: getUserResponse.User.email,
        phoneNo: getUserResponse.User.mobilenumber,
        currentPassword: getUserResponse.User.currentPassword,
        newPassword: getUserResponse.User.newPassword,
        confirmNewPassword: getUserResponse.User.confirmNewPassword,
      });
    }
  }, [getUserResponse, form]);

  useEffect(() => {
    let AvatarIcons = Array(30)
      .fill()
      .map((_, index) => {
        return `https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/Icons-${index + 1}.png`;
      });

    setAvatarList(AvatarIcons);
    // Now AvatarIcons contains an array of 30 URLs for avatar icons
  }, []);

  const props = {
    action: `${constant.baseUrl}api/user/UserImage/${getUserResponse?.User._id}`,
    listType: 'picture',
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement('img');
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.font = '33px Arial';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob((result) => resolve(result));
          };
        };
      });
    },
  };

  return (
    <div className="col-md-9 p-4 ">
      <div className="col-md-12 bg-white p-3 rounded">
        <div className="mx-4 mt-3">
          <p className="p-header">Edit Your Profile</p>
          <Form form={form} onFinish={handleLogin} initialValues={loginData}>
            <div className="col-md-12 row">
              <div className="col-md-12">
                <div className="text-center mb-5">

                  {getUserResponse?.User?.profile_img !== "" ? (
                    <>
                      <div className="pos-rel">
                        <Image
                          className="rounded-circle"
                          width={120}
                          height={120}
                          src={
                            selectImg !== ""
                              ? selectImg
                              : getUserResponse?.User?.profile_img
                          }
                        />
                        <div
                          onClick={() => {
                            setAvatarOpen(true);
                          }}
                          className="pos-abss"
                        >
                          <i class="fa-regular fa-pen-to-square"></i>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Avatar size={70} style={{ backgroundColor: "#87d068" }}>
                      {`${getUserResponse.User.firstname.charAt(
                        0
                      )}${getUserResponse.User.lastname.charAt(0)}`}
                    </Avatar>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <p className="p-text p-textbody ft-16">First Name</p>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your first name",
                    },
                  ]}
                >
                  <Input
                    className="form-control bg-input"
                    placeholder="Enter your first name"
                    value={loginData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <p className="p-text p-textbody ft-16">Last Name</p>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your last name",
                    },
                  ]}
                >
                  <Input
                    className="form-control bg-input"
                    placeholder="Enter your last name"
                    value={loginData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="col-md-12 row">
              <div className="col-md-6">
                <p className="p-text p-textbody ft-16">Email</p>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input
                    className="form-control bg-input"
                    placeholder="Email"
                    value={loginData.email}
                    disabled
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <p className="p-text p-textbody ft-16">Phone No</p>
                <Form.Item
                  name="phoneNo"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input
                    disabled
                    className="form-control bg-input"
                    placeholder="Phone No"
                    value={loginData.phoneNo}
                    onChange={(e) => handleChange("phoneNo", e.target.value)}
                  />
                </Form.Item>
              </div>
            </div>
            {/* <div className="col-md-12">
<p className="p-text p-textbody ft-16">Address</p>
<Form.Item
name="address"
rules={[
{
required: true,
message: "Please enter your address",
},
]}
>
<Input
className="form-control bg-input"
placeholder="Address"
value={loginData.address}
onChange={(e) => handleChange("address", e.target.value)}
/>
</Form.Item>
</div> */}
            {/* <div className="col-md-12">
              <p className="p-text p-textbody ft-16">Password Change</p>
              <Form.Item
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your current password",
                  },
                ]}
              >
                <Input
                  className="form-control bg-input"
                  placeholder="Current Password"
                  value={loginData.currentPassword}
                  onChange={(e) =>
                    handleChange("currentPassword", e.target.value)
                  }
                />
              </Form.Item>
            </div>
            <div className="col-md-12">
              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your new password",
                  },
                ]}
              >
                <Input
                  className="form-control bg-input"
                  placeholder="New Password"
                  value={loginData.newPassword}
                  onChange={(e) => handleChange("newPassword", e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="col-md-12">
              <Form.Item
                name="confirmNewPassword"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your new password",
                  },
                ]}
              >
                <Input
                  className="form-control bg-input"
                  placeholder="Confirm New Password"
                  value={loginData.confirmNewPassword}
                  onChange={(e) =>
                    handleChange("confirmNewPassword", e.target.value)
                  }
                />
              </Form.Item>
            </div> */}

            <div className="d-flex justify-content-end pt-2">
              <button type="primary" className="btn bg-cl-tr w-40 h-25">
                Cancel
              </button>
              <Button
                type="primary"
                className="btn button h-25"
                htmlType="submit"
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          loading="lazy"
          src={previewImage}
        />
      </Modal>
      <Modal
        open={AvatarOpen}
        title={"Pick the Avatar"}
        footer={null}
        onCancel={() => {
          setAvatarOpen(false);
        }}
      >
        <div className="">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload the Profile</Button>
          </Upload>
          {AvatarIcons.map((avatarUrl, index) => (
            <img
              loading="lazy"
              key={index} // Ensure each image has a unique key
              alt={`Avatar ${index + 1}`}
              style={{
                width: "65px",
                height: "65px",
                margin: "13px", // Add some margin between images
              }}
              onClick={() => {
                setSelectImg(avatarUrl);
                setAvatarOpen(false);
              }}
              src={avatarUrl}
            />
          ))}
        </div>
      </Modal>

    </div>
  );
};

export default EditProfile;
