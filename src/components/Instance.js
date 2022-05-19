const Instance = () => {

    const [instanceCount, setInstanceCount] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            count: 0
        }
    );

    return (
        <div className="input-instance-type decision-problem-input">
        <TextField
        variant="outlined"
        label="Instance"
        name="Instance"
        multiline
        minRows={1}
        defaultValue={decisionProblemInput.name}
        onChange={handleInput}
        />
        <p id="is-a"> is-a </p>

        <TextField
        variant="outlined"
        label="Type"
        name="Type"
        multiline
        minRows={1}
        defaultValue={decisionProblemInput.name}
        onChange={handleInput}
        />

        {/* <svg data-testid="RemoveIcon"></svg> */}
        <Button
        id="remove"
        type="remove"
        variant="contained"
        color="primary"
        // onClick={}
        >
        Remove
        </Button>
    </div>)
}