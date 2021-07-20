import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

//state
// pageNumber +
// usersCount -
//
class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const users = this.props.users;
    const { currentPage } = this.state;

    const userPerPage = 3;

    const startIndex = (currentPage - 1) * userPerPage;
    const endIndex = startIndex + userPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex + 1);

    // input: userPerPage, usersToDisplay
    // outPut: users[]

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={userPerPage}
        />

        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
