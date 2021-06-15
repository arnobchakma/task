import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
    const [data, setData] = useState([
    {
        "moduleName": "Configuration",
		"activityName": "Item Category",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Configuration",
		"activityName": "Item",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Configuration",
		"activityName": "Party",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Configuration",
		"activityName": "Profile",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },{
        "moduleName": "Configuration",
		"activityName": "Bank Account",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Configuration",
		"activityName": "Change Password",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Purchase",
		"activityName": "Purchase",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Purchase",
		"activityName": "Due Payment",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Sales",
		"activityName": "Sales",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Sales",
		"activityName": "Due receive",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
    {
        "moduleName": "Accounts",
		"activityName": "Voucher",
		"isCreate": false,
		"isView": false,
		"isEdit": false,
		"isDelete": false,
		"isApprove": false
    },
   ]);

   // handle input checkbox
   const handleCheckBox = (name, e) => {
      let newData = [];
      data.forEach(item => {
         if (item.activityName === name) {
            const newItem = { ...item };
            newItem[e.target.name] = e.target.checked;
            newData.push(newItem);
         } else {
            newData.push(item);
         }
      });
      setData(newData);
   };

   return (
      <div>
         <h2> Task Two </h2>
         <div className="table-wrapper">
            <table>
                <tbody>
                <tr>
                    <th>Module Name</th>
                    <th>Activity Name</th>
                    <th>Create</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Approve</th>
                </tr>
                {data.map(item => (
                    <tr>
                        <td>{item.moduleName}</td>
                        <td>{item.activityName}</td>
                        <td>
                            <input
                            className="title"
                            type="checkbox"
                            name="isCreate"
                            checked={item.isCreate}
                            onChange={e => handleCheckBox(item.activityName, e)}
                            />
                        </td>
                        <td>
                            <input
                            className="title"
                            type="checkbox"
                            name="isView"
                            checked={item.isView}
                            onChange={e => handleCheckBox(item.activityName, e)}
                            />
                        </td>
                        <td>
                            <input
                            className="title"
                            type="checkbox"
                            name="isEdit"
                            checked={item.isEdit}
                            onChange={e => handleCheckBox(item.activityName, e)}
                            />
                        </td>
                        <td>
                            <input
                            className="title"
                            type="checkbox"
                            name="isDelete"
                            checked={item.isDelete}
                            onChange={e => handleCheckBox(item.activityName, e)}
                            />
                        </td>
                        <td>
                            <input
                            className="title"
                            type="checkbox"
                            name="isApprove"
                            checked={item.isApprove}
                            onChange={e => handleCheckBox(item.activityName, e)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
         </div>
      </div>
   );
};

export default Admin;