const initialState = {
    employees: [],
};

function employeesReducer(state = initialState, action) {
    console.log('Reducer action:', action);
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };
        default:
            return state;
    }
}

export default employeesReducer;