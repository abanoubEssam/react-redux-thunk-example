import React from 'react';
import { connect } from 'react-redux';

export interface UserHeaderProps {
    userId?: number;
    user?: any
}

export interface UserHeaderState {

}

class UserHeader extends React.Component<UserHeaderProps, UserHeaderState> {
    render() {
        const { user } = this.props
        if (!user) {
            return null
        }
        return (
            <div className="header">
                {user.id}- {user.name}
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: UserHeaderProps) => {
    return { user: state.users.find((user: any) => user.id === ownProps.userId) }
}
export default connect(mapStateToProps)(UserHeader);