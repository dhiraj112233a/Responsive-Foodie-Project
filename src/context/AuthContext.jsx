import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const getStoredUser = () => {
  const user = localStorage.getItem("foodie_current_user");
  return user ? JSON.parse(user) : null;
};

const getStoredUsers = () => {
  const users = localStorage.getItem("foodie_users");
  return users ? JSON.parse(users) : [];
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem("foodie_current_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("foodie_current_user");
    }
  }, [user]);

  const register = ({ name, email, password }) => {
    const users = getStoredUsers();

    const exists = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      return {
        success: false,
        message: "User already exists with this email."
      };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone: "",
      address: ""
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem("foodie_users", JSON.stringify(updatedUsers));

    const safeUser = { ...newUser };
    delete safeUser.password;

    setUser(safeUser);

    return {
      success: true,
      message: "Account created successfully."
    };
  };

  const login = ({ email, password }) => {
    const users = getStoredUsers();

    const foundUser = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password."
      };
    }

    const safeUser = { ...foundUser };
    delete safeUser.password;

    setUser(safeUser);

    return {
      success: true,
      message: "Login successful."
    };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updatedUser) => {
    const users = getStoredUsers();

    const updatedUsers = users.map((item) =>
      item.id === user.id
        ? {
            ...item,
            name: updatedUser.name,
            phone: updatedUser.phone,
            address: updatedUser.address
          }
        : item
    );

    localStorage.setItem("foodie_users", JSON.stringify(updatedUsers));
    setUser({ ...user, ...updatedUser });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        register,
        login,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
