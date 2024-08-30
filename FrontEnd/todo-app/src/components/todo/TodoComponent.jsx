import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { addTodoApi, retrieveTodoApi, UpdateTodoApi } from "./api/TodoApiService";
import moment from "moment";

const TodoComponent = () => {
    const { id } = useParams();
    const authContext = useAuth();
    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("");
    const [error, setError] = useState({ description: "", targetDate: "" });
    const username = authContext.username;
    const navigate = useNavigate()

    useEffect(() => {
        retrieveTodos();
    }, [id]);

    function retrieveTodos() {
        if (id != -1) {
            retrieveTodoApi(username, id)
                .then((response) => {
                    setDescription(response.data.description || "");
                    setTargetDate(moment(response.data.targetDate).format("YYYY-MM-DD") || "");
                })
                .catch((error) => console.log(error));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        let errors = { description: "", targetDate: "" };
        let isValid = true;

        if (description.length < 5) {
            errors.description = "Description must be at least 5 characters long.";
            isValid = false;
        }
        const targetDateobj = new Date(targetDate)

        if (targetDate =="" || targetDateobj <= new Date()) {
            errors.targetDate = "Please select valid target date.";
            isValid = false;
        }

        if (!isValid) {
            setError(errors);
            return;
        } else {
            const todo = {
                id: id,
                username: username,
                description: description,
                targetDate: targetDate,
                done: false
            }
            console.log(todo)
            if (id == -1) {
                addTodoApi(username, todo)
                    .then(
                        console.log("added the new data in the database"),
                        navigate('/todo')
                    ).catch(error => console.log("add new todo - " + error))
            } else {
                UpdateTodoApi(username, id, todo)
                    .then(
                        console.log("updated in the database"),
                        navigate('/todo')
                    )
                    .catch(error => console.log(error))
            }
        }

        setError({ description: "", targetDate: "" });

        const values = { description, targetDate };
        console.log(values);

        // Continue with the form submission logic (e.g., send data to the server)
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            className={`form-control ${error.description ? 'is-invalid' : ''}`}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {error.description && <div className="invalid-feedback">{error.description}</div>}
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Target Date</label>
                        <input
                            type="date"
                            className={`form-control ${error.targetDate ? 'is-invalid' : ''}`}
                            value={targetDate}
                            onChange={(e) => setTargetDate(e.target.value)}
                        />
                        {error.targetDate && <div className="invalid-feedback">{error.targetDate}</div>}
                    </fieldset>
                    <div>
                        <button className="btn btn-success" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoComponent;
