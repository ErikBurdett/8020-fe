// // AuthContext.tsx
// import React, { Dispatch, SetStateAction } from 'react';

// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
// }

// const AuthContext = React.createContext<[AuthState, Dispatch<SetStateAction<AuthState>>] | undefined>(undefined);

// export const AuthProvider: React.FC = ({ }) => {
//   const [authState, setAuthState] = React.useState<AuthState>({
//     isAuthenticated: false,
//     token: null,
//   });

//   // Add more logic here to handle token storage/retrieval

//   return (
//     <AuthContext.Provider value={[authState, setAuthState]}>
//       {}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
