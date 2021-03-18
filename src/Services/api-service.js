URL = "https://front-end-511f5-default-rtdb.firebaseio.com/List.json"

// state = {
//     // List: [
//     //   {
//     //     "Id": uuidv4(),
//     //     "Avatar": "88",
//     //     "Name": "Mila Kunis",
//     //     "Created": "2013/08/08",
//     //     "Role": "Admin",
//     //     "Status": "Active",
//     //     "Email": "mila@kunis.com",
//     //     "Gender": "women",
//     //   },
//     //   {
//     //     "Id": uuidv4(),
//     //     "Avatar": "68",
//     //     "Name": "Camil Blass",
//     //     "Created": "2013/02/08",
//     //     "Role": "User",
//     //     "Status": "Inactive",
//     //     "Email": "camil@gmail.com",
//     //     "Gender": "men",
//     //   },
//     //   {
//     //     "Id": uuidv4(),
//     //     "Avatar": "33",
//     //     "Name": "Jenifer Jonson",
//     //     "Created": "2013/02/08",
//     //     "Role": "User",
//     //     "Status": "Banned",
//     //     "Email": "jj@gmail.com",
//     //     "Gender": "men",
//     //   },
//     //   {
//     //     "Id": uuidv4(),
//     //     "Avatar": "36",
//     //     "Name": "John Black",
//     //     "Created": "2013/02/08",
//     //     "Role": "User",
//     //     "Status": "Pending",
//     //     "Email": "jj@gmail.com",
//     //     "Gender": "men",
//     //   },
//     // ],
//     List: [],
//     currentContact: ""
//   }

updateDatabase = () => {
    const data = fetch(this.URL)
        .then(responce => {
            return responce.json();
        }).then(data => {
            if (data !== null) {
                return data
            }
        })
        .catch(err => {
            return err
        })
    return data;
}