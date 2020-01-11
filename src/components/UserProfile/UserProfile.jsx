import React, { Component } from 'react'
import Loading from '../common/Loading'
import Form from '../common/form'
import { getjwt } from '../../services/loginService'

import Profile from '../Profile'
import Memberships from '../Memberships'
import ProfileLinks from '../ProfileLinks'
import Joi from 'joi'
class UserProfile extends Form {
  state = {
    isLoading: true
  }

  async componentDidMount() {
    await this.props.getCurrentUser(getjwt())
    let userId = this.props.match.params.userId
    await this.props.getUserProfile(userId)
    if (this.props.userProfile.firstName.length) {
      this.setState({ isLoading: false })
    }
    //console.log(this.props.userProfile)
  }
  // componentWillUnmount() {
  //   this.props.clearUserProfile()
  // }

  // componentDidUpdate() {
  //   let userProfile = this.props.userProfile
  //   if (userProfile && this.state.isLoading === true) {
  //     this.setState({ isLoading: false })
  //   }
  // }

  teamsSchema = {
    _id: Joi.string().required(),
    teamName: Joi.string().required()
  }
  projectsSchema = {
    _id: Joi.string().required(),
    projectName: Joi.string().required()
  }

  render() {
    console.log(this.props)
    if (this.state.isLoading === true) {
      return <Loading />
    }

    let { userId: targetUserId } = this.props.match.params
    let { userid: requestorId, role: requestorRole } = this.props.user
    let userProfile = this.props.userProfile

    const {
      teams,
      projects,
      personalLinks,
      adminLinks,
      firstName,
      lastName
    } = this.props
    console.log('firstName', firstName)
    let isUserSelf = targetUserId === requestorId
    let canEditFields = isUserAdmin || isUserSelf
    const isUserAdmin = requestorRole === 'Administrator'

    return (
      <React.Fragment>
        <div className='container'>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className='row my-auto'>
              <div className='col-md-4'></div>
              <div className='col-md-8'>
                <div className='form-row'>
                  {this.renderInput({
                    name: 'firstName',
                    label: 'First Name:',
                    className: 'col-md-4',
                    value: firstName,
                    readOnly: canEditFields ? null : true
                  })}
                  {this.renderInput({
                    name: 'lastName',
                    label: 'Last Name:',
                    className: 'col-md-4',
                    value: lastName,
                    readOnly: canEditFields ? null : true
                  })}
                </div>
                <div className='form-row'></div>
              </div>
            </div>

            <div className='row mt-3'>
              <ProfileLinks
                canEdit={isUserAdmin}
                data={adminLinks}
                label='Admin'
                handleProfileLinks={this.handleCollection}
                collection='adminLinks'
              />
            </div>
            <div className='row mt-3'>
              <ProfileLinks
                canEdit={canEditFields}
                data={personalLinks}
                label='Social/Professional'
                // handleProfileLinks={this.handleCollection}
                collection='personalLinks'
              />
            </div>
            <div className='row mt-3'>
              <div className='col-6'>
                <Memberships
                  schema={this.teamsSchema}
                  canEdit={isUserAdmin}
                  data={teams}
                  label='Team'
                  collection='teams'
                  //handleDelete={this.handleCollection}
                  // handleBulkUpdates={this.handleMemberships}
                />
              </div>
              <div className='col-6'>
                <Memberships
                  schema={this.projectsSchema}
                  canEdit={isUserAdmin}
                  data={projects}
                  label='Project'
                  collection='projects'
                  //handleDelete={this.handleCollection}
                  //handleBulkUpdates={this.handleMemberships}
                />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
    // return (
    //   <div>
    //     <h2>targetUserId: {targetUserId}</h2>
    //     <h2>
    //       requestorId:{requestorId} requestorRole:{requestorRole}
    //     </h2>
    //     <h2>userProfile:{JSON.stringify(userProfile)}</h2>
    //   </div>
    // )
    // return (
    //   <Profile
    //     requestorId={requestorId}
    //     requestorRole={requestorRole}
    //     userProfile={userProfile}
    //     targetUserId={targetUserId}
    //     onSubmit={this.handleSubmit}
    //   />
    // )
  }
}

// handleSubmit = async data => {
//   try {
//     await editUserProfileData(this.state.targetUserId, data);
//     toast.success("Edits were successfully saved");
//   } catch (error) {
//     toast.error(error);
//   }
// };

export default UserProfile
