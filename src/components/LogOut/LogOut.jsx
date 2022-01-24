import {useEffect} from "react";

function LogOut({setUser}) {
  useEffect(() => {
    const logout = (() => {
      setUser(undefined);
      localStorage.clear();
      window.location.href = "/";
    })();
  }, [setUser]);

  return null;
}

export default LogOut;
