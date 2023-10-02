import Footer from "../../components/Footer";
import Login from "../../components/LoginForm";
import Navbar from "../../components/Navbar";

const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-col justify-start items-start gap-12 relative w-screen bg-gray-50 dark:bg-[var(--page-color)]">
      <Navbar />
      <div className={"w-screen h-[50px]"} />
      <Login />
      <div>
        <div className="mx-auto w-10 h-1 bg-blue-500 dark:bg-indigo-600 rounded-2xl mb-10" />
        <Footer />
      </div>
    </main>
  );
};

export default LoginPage;
