import axios from "axios";
import { useEffect, useState } from "react";

function AxiosExample() {

    const [value, setValue] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(r => { setValue(r.data) });
    }, []);
    return <div>
        <div>ID: {value[0].id}</div>
        <div>Name: {value[0].name}</div>
        <div>E Mail: {value[0].email}</div>

    </div>
}
export default AxiosExample;