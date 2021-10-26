import React from 'react';
import { AuthProvider, useAuth } from '../providers/auth';

const Profile = props => {
  const { user } = useAuth();
  return (
    <AuthProvider>
      <div>
        <h1>Profile:</h1>
        {user.name}
      </div>
    </AuthProvider>
  );
};

export default Profile;