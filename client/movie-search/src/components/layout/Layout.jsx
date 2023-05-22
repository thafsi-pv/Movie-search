import '../layout/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="login">
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Layout;