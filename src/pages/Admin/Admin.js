import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import EcApiForm from "./components/EcApiForm";

const links = [
  {
    id: 1,
    text: "Create Ecommerce Api",
    link: "",
  },
  {
    id: 2,
    text: "Create Movies Api",
    link: "/abc",
  },
];

const Admin = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { url, path } = useRouteMatch();
  const router = useHistory();

  useEffect(() => {
    setLoading(true);
    if (JSON.parse(!localStorage.getItem("token"))) {
      router.replace({ pathname: "/" });
    }
    //config
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    //get private access
    fetch(`https://radiant-mountain-69015.herokuapp.com/api/private`, config)
      .then((res) => res.json())
      .then((data) => {
        !data.success && router.replace({ pathname: "/" });
        !data.success && setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="text-gray-300 w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen max-w-7xl w-full m-auto">
      <header className="w-full flex justify-between  items-center border border-gray-500 py-4 px-3">
        <div className="flex space-x-4">
          {links.map(({ id, text, link }) => (
            <div
              onClick={() => router.push(`${path}${link}`)}
              key={id}
              className="text-gray-300 cursor-pointer"
            >
              {text}
            </div>
          ))}
        </div>

        <div className="text-gray-300 font-semibold cursor-pointer" onClick={() => logout()}>Logout</div>
      </header>

      <Switch>
        <section className="mt-10 w-full">
          {data && <p className="text-gray-400">{data.data}</p>}
          <Route exact path={`${url}/`}>
            <EcApiForm />
          </Route>
        </section>
      </Switch>
    </main>
  );
};

export default Admin;
