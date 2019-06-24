// import React from 'react';
// import { UserList, Modal } from '../kb-components';
// import {
//   withData,
//   withKamkabelService,
//   compose } from '../hoc-helpers';




// const mapUsersMethodsToProps = (kamkabelService) => {
//   return {
//     getData: kamkabelService.getAllUsers
//   };
// };

// const UsersList = compose(
//                      withKamkabelService(mapUsersMethodsToProps),
//                      withData,
//                    )(UserList);




// const UsersPage = () => {
//   return (
//     <React.Fragment>
//       <h2>Вы на странице пользователей</h2>
//       <UsersList />
//       <Modal />
//     </React.Fragment>
//   )
// }


// export default UsersPage;

import React from 'react';
import UserList from '../user-list';


const UsersPage = () => {
  return (
    <div className="col-lg-10 col-sm-12">
      <UserList />
    </div>
  )
}

export default UsersPage;
