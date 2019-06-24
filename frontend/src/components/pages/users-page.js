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

import React, { Fragment } from 'react';
import UserList from '../user-list';
import UserSortPanel from '../user-sort-panel';
import Modal from '../kb-components/modal';

const UsersPage = () => {
  return (
    <Fragment>
      {/* <div className="col-12">
        <Modal />
      </div> */}
      <div className="col-lg-10 col-sm-12">
        <UserList />
      </div>
      {/* <div className="col-lg-2 col-sm-12">
        <UserSortPanel />
      </div> */}
    </Fragment>
  )
}

export default UsersPage;
