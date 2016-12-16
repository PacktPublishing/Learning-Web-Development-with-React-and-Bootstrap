import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './UserListItem.css';

export default class UserListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onTrashClick: PropTypes.func.isRequired
  }

  render () {
    return (
	<div>
		<div className="media-left">
			<a href="#">        
			  <img className="media-object img-thumbnail" src={"http://placehold.it/64x64"}/>      
			</a>
		</div>
		  <div className={`media-body ${styles.paddng10}`}>
			<h3 className="media-heading">
			  <strong><a href="#">{this.props.name}</a></strong>
			</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida euismod ligula, vel semper nunc blandit sit amet. 
		</p>

        <div className={`pull-right ${styles.userActions}`}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteUser(this.props.id)} title="Delete the user">
            Delete the user <i className="fa fa-trash" />
          </button>
        </div>
	 </div>
	 </div>
	
    );
  }

}
